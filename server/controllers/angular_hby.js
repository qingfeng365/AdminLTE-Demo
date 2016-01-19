'use strict';

var people = [{
  name: 'Adam',
  email: 'adam@email.com',
  age: 12,
  country: 'United States'
}, {
  name: 'Amalie',
  email: 'amalie@email.com',
  age: 12,
  country: 'Argentina'
}, {
  name: 'Estefanía',
  email: 'estefania@email.com',
  age: 21,
  country: 'Argentina'
}, {
  name: 'Adrian',
  email: 'adrian@email.com',
  age: 21,
  country: 'Ecuador'
}, {
  name: 'Wladimir',
  email: 'wladimir@email.com',
  age: 30,
  country: 'Ecuador'
}, {
  name: 'Samantha',
  email: 'samantha@email.com',
  age: 30,
  country: 'United States'
}, {
  name: 'Nicole',
  email: 'nicole@email.com',
  age: 43,
  country: 'Colombia'
}, {
  name: 'Natasha',
  email: 'natasha@email.com',
  age: 54,
  country: 'Ecuador'
}, {
  name: 'Michael',
  email: 'michael@email.com',
  age: 15,
  country: 'Colombia'
}, {
  name: 'Nicolás',
  email: 'nicolas@email.com',
  age: 43,
  country: 'Colombia'
}];

var pagedata = {
  people:people
};
var pageoption = {
  env: 'development'
};


module.exports.basicform = function (req, res, next) {
  res.render('angular_form_basic_hby', {
    title: 'angular form',
    pagedata:JSON.stringify(pagedata),
    pageoption:JSON.stringify()
  });
};


module.exports.postbasicform = function (req, res, next) {
	var inputData = req.body.input;
	console.log(inputData);
  res.render('angular_form_basic_hby', {
    title: 'angular form posted'
  });
};


