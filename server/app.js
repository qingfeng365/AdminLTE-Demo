'use strict';

/**
 * 通用模块 
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * 配置
 */
var config = require('./config/config');

/**
 * 公共模块 
 */
var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);
// var mongoose=require('mongoose');
// mongoose.connect(config.mongodbUrl);

/**
 * 应用环境初始化
 */
var app = express();
app.locals.appTitle = config.appTitle;

app.set('views', path.join(__dirname, '/views/pages'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/**
 * 通用路由中间件
 */
app.use(session({
  name: 'autoCRMSession',
  secret: 'autoCRMKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3 * 24 * 60 * 60 * 1000
  },
  // store: new MongoStore({
  //   mongooseConnection: mongoose.connection,
  // })
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

/**
 * 应用-权限模块
 */

/**
 * 应用-路由模块
 */
var routes = require('./routes/index');

/**
 * 应用程序-session路由
 */
app.use(function(req, res, next){
  res.locals.loginuser = req.session.loginuser;
  next();
});

/**
 * 应用程序普通页面路由
 */
app.use('/', routes);

var validimgcode = require('./routes/validimgcode');

app.use('/validimgcode', validimgcode);
/**
 * 应用程序普通服务路由（注意：服务路由不要加用户权限控制）
 */




/**
 * 错误处理路由-404
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * 错误处理路由-开发状态-error stacktrace
 */
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/**
 * 错误处理路由-生产状态-no error stacktrace
 */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
