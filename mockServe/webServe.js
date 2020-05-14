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
    token = '',
    userInfos = {}
// 加载配置文件
read(path.join(__dirname, './config/serve.yml'))
.then((res) => {
    request = res.request
    token = res.token
    userInfos = request.login.params
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
    if(userInfos.userName === req.params.userName &&  userInfos.password === req.params.password) {
        // 进行生成 token后，进行保存到项目中

    }else {
        errStatus(res,501,next)
    }
    
})


function errStatus (res,status,next,msg) {
    res.status(status).send(msg || '')
    next()
}

module.exports = router


