module.exports = {
    "root": true,
    //继承eslint的默认配置
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "globals": {
        "window": true,
    },
    "env": {
        "browser": false, //是否为浏览器
        "es6": true,
        "node": true,
        "mocha": true,
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": ["error", {
            "allow": ["warn", "info", "error"],
        }],
    }
};