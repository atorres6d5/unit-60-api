const model = require('../model/model.js')


function getAll(req, res, next){
  let collection = model.getAll()
  //console.log(collection)
  return res.status(200).send({ data: collection})
}

function getOne(req, res, next){
  let onebook = model.getOne(req.params.id)
  return res.status(200).send({data: onebook})
}

function makeBook(req, res, next){
  let body = req.body
  if(!body.title || !body.first || !body.last){
    return next({status:400, message: "Must provide book title, and authors first and last name"})
  }
  let thisBook = model.newBook(body.title, body.first, body.last)
  return res.status(200).send({data:thisBook})
}

function update(req, res, next){
  let id = req.params.id
  let Description = req.body.info

  if(!id) return next({status: 400, message:"please provide us with an id to look for"})
  //console.log(Description);
  let relevant = model.upDate(id, Description)

   //console.log(relevant);
  if(!relevant) return next({status:404, message: "no book found with that name"})
  return res.status(200).send({data: relevant})
}






module.exports = {getAll, getOne, makeBook, update}
