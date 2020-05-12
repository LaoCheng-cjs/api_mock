/*
    控制台页面服务器接口。实行增删改
*/ 
var path = require('path')
var express = require('express')
var router = express.Router()
import { read } from "node-yaml";
var request = {}
// 加载配置文件
read(path.join(__dirname, './config/serve.yml'))
.then((res) => {
    request = res.request
//    console.log(.index.params, '');
})
.catch((err) => {
   console.log(err)
})
// console.log(, '');
// Yml.load(path.join(__dirname, './config/serve.yml'))
router.all('/__api/getApiList', function (req, res, next) {
    console.log(request.getApiList, '');
    console.log(req.body)
    console.log(req.query)
    console.log(req.params)
    res.send({a:121})
    next()
})


module.exports = router


