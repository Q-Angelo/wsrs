const http = require('http');
const chalk = require('chalk');
const path = require('path');
const config = require('./config/defaultConfig');
const route = require('./helper/route');
const openUrl = require('./helper/open');

class Server{
	constructor(conf){
		this.fileConfig = Object.assign({}, config, conf);
	}

	start(){
		const config = this.fileConfig;
		const server = http.createServer((req, res) => {
			const filePath = path.join(config.root, req.url);
			
			route(req, res, filePath, config);
		});
		
		server.listen(config.port, config.http, () => {
			const addr = `${config.host}:${config.port}`;
			
			console.info(`server started at ${chalk.green(addr)}`);

			openUrl(addr);
		});
	}
}

module.exports = Server;