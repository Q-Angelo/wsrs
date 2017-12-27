const fs = require('fs');
const util = require('util');
const promisify = util.promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const path = require('path');
const handlebars = require('handlebars');
const mime = require('./mime');
const compress = require('./compress');
const range = require('./range');
const isFresh = require('./cache');

//使用绝对路径
const tplPath = path.join(__dirname, '../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = handlebars.compile(source.toString());

module.exports = async function (req, res, filePath, config) {
    try{
        const stats = await stat(filePath);
        
        if(stats.isFile()){
            const contentType = mime(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);

            if(isFresh(stats, req, res)){
                res.statusCode = 304;
                res.end();
                return;
            }

            //使用流处理一点返回一点 这样在高并发下将会表现的更好
            let rs;
            const {code, start, end} = range(stats.size, req, res);
            if(code == 200){
                rs = fs.createReadStream(filePath);
            }else{
                res.statusCode = 206;
                rs = fs.createReadStream(filePath, {start, end});
            }

            if(filePath.match(config.compress)){
                rs = compress(rs, req, res);
            }

            rs.pipe(res);
        }else if(stats.isDirectory()){
            const files = await readdir(filePath);
            const dir = path.relative(config.root, filePath); //一个文件相对于另外一个文件的路径
            const data = {
                title: path.basename(filePath), //当前文件的路径
                dir: dir ? `/${dir}` : '', //加上相对网站的根路径
                files,
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(template(data));
        }
    }catch(ex){
        console.error(ex);

        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${filePath} is not a directory or file! ${ex}`);
    }
}