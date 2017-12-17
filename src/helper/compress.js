const {createGzip, createDeflate} = require('zlib');

module.exports = (rs, req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    
    //浏览器不支持的或者服务器不支持的 直接返回 不做处理
    if(!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)){
        return rs;
    }else if(acceptEncoding.match(/\bgzip\b/)){ //优先使用gzip 因为gzip的压缩比较好
        res.setHeader('Content-Encoding', 'gzip');
        return rs.pipe(createGzip())
    }else if(acceptEncoding.match(/\bdeflate\b/)){
        res.setHeader('Content-Encoding', 'deflate');
        return rs.pipe(createDeflate())
    }
}