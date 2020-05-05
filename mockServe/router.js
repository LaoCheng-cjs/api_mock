var express = require('express')
var router = express.Router()

router.get('/a/ss', function (req, res, next) {
    res.send('<div>{</div>')
    next()
})


module.exports = router