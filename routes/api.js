var express = require('express');
var router = express.Router();
var db = require('../models/')
var fung = require('../controller/userControl')

/* GET home page. */
router.get('/', fung.showAll);

router.post('/', fung.create)

router.get('/:id', fung.find)

router.delete('/:id', fung.hapus)

router.put('/:id', fung.apdet)

module.exports = router;
