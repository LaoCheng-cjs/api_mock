import router from './router'
import path from 'path'
import webRouter from './webServe'
// npm i colors
var colors = require('colors/safe');

var express = require('express')
var app = express()
var http = require('http')

// 挂载静态资源
app.use(express.static(path.join(__dirname, 'views')))
app.use(webRouter)

// 挂载路由
app.use(router)
module.exports = () => {
    var httpServer = http.createServer(app),
        PORT = '8111',
        IPd = getIPAdress();
    httpServer.listen(PORT,IPd , function() {
        console.log(colors.blue('HTTP Server is running on:  http://' + IPd + ':' + PORT));
    });
}

function getIPAdress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
      var iface = interfaces[devName];
      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }
}
  