const path = require("path");

module.exports = {
    entry : {
        main : './src/index.js'
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}