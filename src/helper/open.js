const {exec} = require('child_process');

module.exports = url => {
    switch (process.platform){ //检查是什么系统
        case 'darwin': //Mac
            exec(`open ${url}`);
            break;
        case 'win32':
            exec(`start ${url}`);
            break;
    }
}