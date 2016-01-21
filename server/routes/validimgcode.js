'use strict';

var express = require('express');
var router = express.Router();
var validimgcodeController = require('../controllers/validimgcode');

/**
 * 获取验证码图片
 */
router.get('/', validimgcodeController.getValidImg);

/**
 * 提交验证码进行检查
 */
router.post('/', validimgcodeController.checkValidImgCode);

module.exports = router;