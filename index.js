'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log('called /');
	// TODO:
	res.json(['this','is','a','test']);
});

router.post('/auth', function(req, res) {
	console.log('called /auth');
	// TODO:
	res.json({'test':'fubar'});
});

module.exports = function(params) {
	params = params || {};
	// TODO: Configure
	return router;			// return router to express use() command
};