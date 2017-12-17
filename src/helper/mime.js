const path = require('path');

const mimeTypes = {
    'md': 'text/html',
    'html': 'text/html',
    'txt': 'text/plain',
    'gif': 'image/gif',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg', 
    'au': 'audio/basic',
    'js': 'application/javascript; charset=utf-8',
}

module.exports = filePath => {
    let ext = path.extname(filePath)
        .split('.')
        .pop()
        .toLowerCase();

    if(!ext){
        //扩展不存在等于原路径
        ext = filePath;
    }

    return mimeTypes[ext] || mimeTypes['txt'];
}