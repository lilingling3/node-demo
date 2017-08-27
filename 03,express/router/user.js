var express = require('express');
var router = express.Router();
router.get('/create',function (req,res) {
    res.send('用户创建router')
});
router.get('/find',function (req,res) {
    res.send('用户创建find')
});

module.exports = router;