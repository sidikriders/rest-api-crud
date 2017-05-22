var db = require('../models/')

function showAll(req, res, next) {
  db.User.findAll().then(data => {
    res.send(data);
  })
}

function create(req, res, next) {
  db.User.create(req.body).then(() => {
    res.send('berhasil buat')
  })
}

function find(req, res, next) {
 let aidi = req.params.id
 db.User.findOne({
   where: {
     id: aidi
   }
 }).then(data => {
   res.send(data)
 })
}

function hapus(req, res, next) {
  let aidi = req.params.id
  db.User.destroy({
    where: {
      id: aidi
    }
  }).then( () => {
    res.send('Berhasil di hapus!!')
  })
}

function apdet(req, res, next) {
  let aidi = req.params.id
  let newName = req.body.name
  let newUser = req.body.username
  let newEmail = req.body.email
  db.User.update({
    name: newName,
    username: newUser,
    email: newEmail
  }, { where: {
    id: aidi
  }}).then(() => {
    res.send('terupdate!!')
  })
}

module.exports={
  showAll,
  create,
  find,
  hapus,
  apdet
}
