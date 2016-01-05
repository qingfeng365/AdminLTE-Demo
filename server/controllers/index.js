'use strict';

module.exports.index = function(req, res, next) {
  res.render('index', { title: '首页' });
};

module.exports.indexhby = function(req, res, next) {
  res.render('index-hby', { title: '首页hby' });
};

module.exports.indexlhg = function(req, res, next) {
  res.render('index-lhg', { title: '首页lhg' });
};

module.exports.indexzfh = function(req, res, next) {
  res.render('index-zfh', { title: '首页zfh' });
};

module.exports.indexczp = function(req, res, next) {
  res.render('index-czp', { title: '首页czp' });
};

module.exports.invoicehby = function(req, res, next) {
  res.render('invoice', { title: 'invoice hby' });
};

module.exports.profilelhg = function(req, res, next) {
  res.render('profile', { title: 'profile lhg' });
};

module.exports.formgeneralzfh = function(req, res, next) {
  res.render('form-general', { title: 'form-general zfh' });
};
module.exports.formadvancedzfh = function(req, res, next) {
  res.render('form-advanced', { title: 'form-advanced zfh' });
};
module.exports.tablesimplezfh = function(req, res, next) {
  res.render('table-simple', { title: 'tablesimple zfh' });
};
module.exports.tabledataczp = function(req, res, next) {
  res.render('table-data', { title: 'table-data czp' });
};

module.exports.mail1czp = function(req, res, next) {
  res.render('mail1', { title: 'mail1 czp' });
};
module.exports.mail2czp = function(req, res, next) {
  res.render('mail2', { title: 'mail2 czp' });
};
module.exports.mail3czp = function(req, res, next) {
  res.render('mail3', { title: 'mail3 czp' });
};
module.exports.testgoodsclass = function(req, res, next) {
  res.render('testgoodsclass', { title: '商品分类' });
};
module.exports.testgoodsclassedit = function(req, res, next) {
  res.render('testgoodsclassedit', { title: '编辑商品分类' });
};
module.exports.testattribute = function(req, res, next) {
  res.render('testattribute', { title: '属性' });
};
module.exports.testattributeedit = function(req, res, next) {
  res.render('testattributeedit', { title: '编辑属性' });
};
module.exports.testgoodsclassattribute = function(req, res, next) {
  res.render('testgoodsclassattribute', { title: '商品分类属性' });
};
module.exports.testgoodsclassattributeedit = function(req, res, next) {
  res.render('testgoodsclassattributeedit', { title: '编辑商品分类属性' });
};