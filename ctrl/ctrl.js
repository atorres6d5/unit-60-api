const model = require('../model/model.js')


function getAll(req, res, next){
  return res.status(200).send({ data: model.books})
}

function makeBook(req, res, next){
  let body = req.body
  if(!body.title || !body.first || !body.last){
    return next({status:400, message: "Must provide book title, and authors first and last name"})
  }
  let thisBook = model.newBook(body.title, body.first, body.last)
  return res.status(200).send({data:thisBook})
}






module.exports = {getAll, makeBook}
