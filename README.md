# wsrs

基于NodeJs的Web静态资源服务器

### 开发环境

* 后端 NodeJS

* 前端 Handlebars


### 安装

npm i -g wsrs

### 使用方法

```
项目默认地址为127.0.0.1:8090, 可以按照以下方式来更改您需要的配置

wsrs # 把当前文件夹作为静态资源服务器根目录

wsrs -p 8080 # 设置端口号为 8080

wsrs -h localhost # 设置 host 为 localhost

wsrs -d /usr # 设置根目录为 /usr

```

### 例子

```

wsrs -p 8080 -h localhost -d /usr

```