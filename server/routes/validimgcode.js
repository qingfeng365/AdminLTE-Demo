'use strict';

var express = require('express');
var router = express.Router();
var validimgcodeController = require('../controllers/validimgcode');

/**
 * 获取验证码图片
 */
router.get('/', validimgcodeController.getValidImg);

/**
 * 
 */
router.post('/', validimgcodeController.checkValidImgCode);

module.exports = router;