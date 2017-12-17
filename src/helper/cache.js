const {cache} = require('../config/defaultConfig');

function refreshRes(stats, res){
    const {maxAge, expires, cacheControl, lastModified, etag} = cache;

    if(expires){
        //Expires单位为毫秒
        res.setHeader('Expires', (new Date(Date.now() + maxAge * 1000)).toUTCString());
    }

    if(cacheControl){
        //public 代表静态资源是公用的 Cache-Control单位为秒
        res.setHeader('Cache-Control', `public, max-age=${maxAge}`);
    }

    if(lastModified){
        //stats.mtime 拿到修改时间转换成字符串
        res.setHeader('Last-Modified', stats.mtime.toUTCString());
    }

    if(etag){
        res.setHeader('ETag', `${stats.size} - ${stats.mtime}`);
    }
}

module.exports = function isFresh(stats, req, res){
    refreshRes(stats, res);

    const lastModified = req.headers['if-modified-since'];
    const etag = req.headers['if-none-match'];

    if(!lastModified && !etag){
        return false;
    }

    if(lastModified && lastModified !== res.getHeader('Last-Modified')){
        return false;
    }

    if(etag && etag !== res.getHeader('ETag')){
        return false;
    }

    return true;
}