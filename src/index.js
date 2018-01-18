const yargs = require('yargs');
const App = require('./app');
const os = require('os');

const argv = yargs
    .usage('swrs [options]')
    .option('p', {
        alias: 'port',
        describe: '端口号',
        default: 8090,
    })
    .option('h', {
        alias: 'hostname',
        describe: 'host',
        default: '127.0.0.1',
    })
    .option('d', {
        alias: 'root',
        describe: 'root path',
        default: os.homedir(),
    })
    .version()
    .alias('v', 'version')
    .help()
    .argv;

    const server = new App(argv);
    server.start();