/*
* 测试所用
* 使用时将其放到index.html同级目录下
* 访问http://localhost:1314/index.html
* 访问务必带上文件名
* */


var http = require('http');
var fs = require('fs');
var path = require("path");
var url1 = path.resolve('./');

var server = http.createServer(function (req, res) {
    let url = req.url;
    let file = url1 + url;
    console.log(file);

    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write('<h2>404错误</h2><p>你要找的页面不存在</p>');
            res.end();
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset="utf-8"',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': '*'
            });
            res.write(data);
            res.end();

        }
    });
}).listen(1314);

console.log('正在监听1314端口...');
