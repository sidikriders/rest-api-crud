var express = require('express');
var router = express.Router();
var db = require('../models/');
var fung = require('../controller/userControl');

/* GET home page. */
router.get('/users', fung.cekUser, fung.showAll);

router.post('/users', fung.cekAdmin, fung.create)

router.get('/users/:id', fung.cekUser, fung.find)

router.delete('/users/:id', fung.cekAdmin, fung.hapus)

router.put('/users/:id', fung.cekUser, fung.apdet)

router.post('/signup', fung.signUp)

router.post('/signin', fung.signIn)

router.get('/memo/all', function(req, res, next) {
  db.Memo.findAll()
  .then(data => {
    res.send(data)
  })
})

router.get('/memo/:id', function(req, res, next) {
  db.Memo.find({
    where: {
      id:req.params.id
    }
  })
  .then(data => {
    res.send(data)
  })
})

router.put('/memo/:id', function(req, res, next) {
  db.Memo.update({
    title: req.body.newTittle,
    text: req.body.newText,
    updatedAt: new Date()
  }, {
    where: {
      id: req.params.id
    }
  }).then(
    res.send('memo terupdate')
  )
})

router.delete('/memo/:id', function(req,res,next) {
  db.Memo.destroy({
    where: {
      id: req.params.id
    }
  }).then(
    res.send('terhapus!!')
  )
})

module.exports = router;
