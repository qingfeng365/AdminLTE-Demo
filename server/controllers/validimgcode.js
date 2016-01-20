'use strict';

var validator = require('validator');
var captchapng = require('captchapng');
var cache = require('node-smple-cache').createCache('LRU', 100 * 100 * 10);

module.exports.getValidImg = function (req, res, next) {
  // res.render('index', { title: '首页' });
  var cacheId = req.query.id;
  console.log(cacheId);
  if (cacheId) {

    var validValue = parseInt(Math.random() * 9000 + 1000);

    cache.set(cacheId, validValue, 1000 * 60 * 30);

    console.log('validValue:' + cache.get(cacheId));

    var p = new captchapng(80, 30, validValue); // width,height,numeric captcha
    // p.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha)
    p.color(60, 179, 215, 100); // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(imgbase64);
  } else {
    res.end('');
  }
};


module.exports.checkValidImgCode = function (req, res, next) {
  var cacheId = req.body.id;
  var code = req.body.code;
  console.log(cacheId + ':' + code);
  var checkcode = cache.get(cacheId);
  if (checkcode) {
    if (validator.equals(checkcode, code)) {
      res.json({
        ok: true
      });
    } else {
      res.status(400).json({
        error: 'invalid code!'
      });
    }
  } else {
    res.status(400).json({
      error: 'invalid code!'
    });
  }
};
