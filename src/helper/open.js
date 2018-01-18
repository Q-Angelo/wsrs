const {exec} = require('child_process');

module.exports = url => {
    switch (process.platform){ //检查是什么系统
        case 'darwin': //Mac
            console.log('打开方式: Mac 打开地址: ', url);

            //exec(`open ${url}`);
            break;
        case 'win32':
            console.log('打开方式: Windows 打开地址: ', url);

            exec(`start ${url}`);
            break;
    }
};