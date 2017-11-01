const uuid = require('uuid/v4')
const fs = require('fs')
const dbpath = __dirname+"/../data/database.json"
const format = "utf-8"


function getAll(){
  let books = JSON.parse(fs.readFileSync(dbpath, format))
  console.log(books)
  return books
}


function getOne(id){
  let books = JSON.parse(fs.readFileSync(dbpath, format))
  let find = books.find(function(ele){
    if (ele.id==id) return ele
  })
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
  console.log(data)
  fs.writeFileSync(dbpath, JSON.stringify(data), format)
  return book
}

function upDate(id, Description){
  let thisBook = getOne(id)
  //console.log(thisBook)
  if (thisBook==false) return false
  let index = books.indexOf(thisBook)
//  console.log(index);
  thisBook.Description = Description
  //books.splice(index, 1, thisBook)
  return thisBook
}



module.exports = { getAll, getOne, newBook, upDate }
