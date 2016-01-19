'use strict';

var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');
var angularController = require('../controllers/angular');
var angularControllerHby = require('../controllers/angular_hby');


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
router.get('/test/goodsclass',indexController.testgoodsclass);
router.get('/test/goodsclassedit',indexController.testgoodsclassedit);
router.get('/test/attribute',indexController.testattribute);
router.get('/test/attributeedit',indexController.testattributeedit);
router.get('/test/goodsclassattribute',indexController.testgoodsclassattribute);
router.get('/test/goodsclassattributeedit',indexController.testgoodsclassattributeedit);

router.get('/angular/basicform', angularController.basicform);
router.post('/angular/basicform', angularController.postbasicform);

router.get('/angular/basicformhby', angularControllerHby.basicform);
router.post('/angular/basicformhby', angularControllerHby.postbasicform);



module.exports = router;
