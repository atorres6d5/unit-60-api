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

  if(!id || !Description) return next({status: 400, message:"please provide us with more information"})
  //console.log(Description);
  let relevant = model.upDate(id, Description)

   //console.log(relevant);
  if(!relevant) return next({status:404, message: "no book found with that name"})
  return res.status(200).send({data: relevant})
}

function remove(req, res, next){
  let id = req.params.id
  if(!id) return next({status: 400, message: "What book do you want to delete?"})
  let lostBook = model.lostBook(id)
  return res.status(200).send({data:lostBook})
}

function getEveryone(req, res, next){
  let id = req.params.id
  let Authors = model.getEveryone(id)
  if (!Authors) return next({status: 400, message: "needs a matching id"})
  return res.status(200).send({data: Authors})
  }

function addAuthor(req, res, next){
  let id = req.params.id
  let body = req.body
  let newAuthors = model.newAuthors(id, body)
  //console.log(newAuthors)
  if (!newAuthors) return next({status: 404, message: "need a matching id"})
  return res.status(200).send({data: newAuthors})
}


module.exports = { getAll, getOne, makeBook, update, remove, getEveryone, addAuthor}
