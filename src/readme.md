* 性能优化之(gzip|deflate)代码压缩

* range范围请求

* cache缓存
    * Expires 比较老的缓存方式使用绝对时间,判断本地有咩有
    * Cache-Control 使用相对时间，相对于你上次请求加的秒的数目
    * If-Modified-Since / Last-Modified
    * If-None-Match / ETag 文件一改变这个值就会发生相应的改变