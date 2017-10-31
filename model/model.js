const uuid = require('uuid/v4')

let books = [
  { "id": "eaf70dcc-2bd4-4238-ad2e-1869d3817165" || uuid(),
    "Name": 'Nineteen Eighty-Four',
    "Borrowed": false,
    "Description": " a dystopian novel published in 1949",
    "Authors":[
      {"id": "5c8963b7-3339-48df-b41c-a87a2975e6f3" || uuid(),
      "First Name":'George',
      "Last Name": 'Orwell'
      }
    ]
  }
]

function getOne(id){
  let find = books.find(function(ele){
    if (ele.id==id) return ele
  })
  return find
}


function newBook(title, first, last){
  let book = {
    'id': uuid(),
    'Name': title,
    'Borrowed':false,
    "Description":"",
    "Authors":[
      {"id":uuid(),
      "First Name": first,
      "Last Name": last
      }
    ]
  }
  books.push(book)
  return book
}

function upDate(id, Description){
  let thisBook = getOne(id)
  if (!thisBook) return fasle
  let index = books.indexOf(thisBook)
  thisBook.Description = Description
  books.splice(index, 1, thisBook)
  return thisBook
}



module.exports = { books, getOne, newBook, upDate }
