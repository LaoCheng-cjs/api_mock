/*
    控制台页面服务器接口。实行增删改
*/ 
var path = require('path')
var express = require('express')
var router = express.Router()
import { read } from "node-yaml";
var fs = require('fs')
var path = require('path')
var request = {},
    token = ''
// 加载配置文件
read(path.join(__dirname, './config/serve.yml'))
.then((res) => {
    request = res.request
    token = res.token
//    console.log(.index.params, '');
})
.catch((err) => {
   console.log(err)
})
// console.log(, '');
// Yml.load(path.join(__dirname, './config/serve.yml'))
router.all('/__api/getConfig', function (req, res, next) { // 获取当前配置文件
    if(token != req.headers.token) {
        errStatus(res,401,next)
        return;
    }
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, './config/index.json')).toString())
    res.json(data)
    next()
})
router.all('/__api/getAllApi', function (req, res, next) { // 添加后的接口地址
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, './config/addMock.json')).toString())
    res.json(data)
    next()
})
router.all('/__api/login', function (req, res, next) { // 添加后的接口地址
    // 验证用户名，密码
    res.json({})
    next()
})


function errStatus (res,status,next) {
    res.status(401).send('从未')
    next()
}

module.exports = router


