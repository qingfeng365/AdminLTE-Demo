'use strict';

var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.index);
router.get('/index-hby', indexController.indexhby);
router.get('/index-lhg', indexController.indexlhg);
router.get('/index-zfh', indexController.indexzfh);
router.get('/index-czp', indexController.indexczp);

router.get('/invoice', indexController.invoicehby);
router.get('/profile', indexController.profilelhg);
router.get('/form-general', indexController.formgeneralzfh);
router.get('/form-advanced', indexController.formadvancedzfh);
router.get('/table-simple', indexController.tablesimplezfh);
router.get('/table-data', indexController.tabledataczp);
router.get('/mail1', indexController.mail1czp);
router.get('/mail2', indexController.mail2czp);
router.get('/mail3', indexController.mail3czp);


module.exports = router;
