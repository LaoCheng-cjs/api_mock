/*
    控制台页面服务器接口。实行增删改
*/ 

var express = require('express')
var router = express.Router()

router.get('/__api/index', function (req, res, next) {
    res.send({a:121})
    next()
})


module.exports = router


