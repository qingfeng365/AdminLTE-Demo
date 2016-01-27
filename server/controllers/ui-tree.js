'use strict';

var pagedata = {
};
var pageoption = {
  env: 'development'
};
module.exports.showtreefix = function (req, res, next) {
  res.render('ui-tree-fix.jade', {
    title: 'ui-tree 固定层级',
    pagedata: JSON.stringify(pagedata),
    pageoption: JSON.stringify(pageoption)
  });
};