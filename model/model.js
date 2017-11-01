const uuid = require('uuid/v4')
const fs = require('fs')
const dbpath = __dirname+"/../data/database.json"
const format = "utf-8"


function getAll(){
  let books = JSON.parse(fs.readFileSync(dbpath, format))
  //console.log(books)
  return books
}


function getOne(id){
  let books = JSON.parse(fs.readFileSync(dbpath, format))
  let find = books.find(function(ele){
    if (ele.id==id) return ele
  })
  //console.log(find)
  return find
}


function newBook(title, first, last){
  let book = {
    "id": uuid(),
    "Name": title,
    "Borrowed":false,
    "Description":"",
    "Authors":[
      {"id":uuid(),
      "First Name": first,
      "Last Name": last
      }
    ]
  }
  let data = getAll()
  data.push(book)
  //console.log(data)
  fs.writeFileSync(dbpath, JSON.stringify(data), format)
  return book
}

function upDate(id, Description){
  let thisBook = getOne(id)
  if (thisBook==false) return false
  let books = JSON.parse(fs.readFileSync(dbpath, format))

  let index = books.indexOf(thisBook)
  thisBook.Description = Description
  books.splice(index, 1, thisBook)

  fs.writeFileSync(dbpath, JSON.stringify(books), format)
  return thisBook
}

function lostBook(id){
  let allBooks = JSON.parse(fs.readFileSync(dbpath, format))
  let start = allBooks.length
  let thisBook = getOne(id)
  allBooks=allBooks.filter((book)=>book.id !== id)
  let end= allBooks.length
  fs.writeFileSync(dbpath, JSON.stringify(allBooks), format)
  if(start>end) return true
  else{return false}
}

function getEveryone(id){
  let ourBook = getOne(id)
  if (ourBook==false) return false
  return ourBook.Authors
}

function newAuthors(id, body){
  let newGuy={
    "id":uuid(),
    "First Name": body.first,
    "Last Name": body.last
  }
  let data = getAll()
  let book = getOne(id)
  data = data.filter((book)=>book.id !== id)

  book.Authors.push(newGuy)
  data.push(book)

  fs.writeFileSync(dbpath, JSON.stringify(data), format)

  return book
}

function removeAuthor(bookID, authorID){
  let book = getOne(bookID)
  let everyone = getEveryone(bookID)
  lostBook(bookID)
  let data = getAll()
  let removed = everyone.filter(function(authors){
    if (authors.id !== authorID) return authors
  })
  book.Authors = removed
  lostBook(bookID)
  data.push(book)
  console.log(data)

  fs.writeFileSync(dbpath, JSON.stringify(data), format)

  console.log(removed)
  return true
}


module.exports = { getAll, getOne, newBook, upDate, lostBook, getEveryone, newAuthors, removeAuthor }
