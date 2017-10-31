const uuid = require('uuid/v4')

let books = [
  { "id": uuid(),
    "Name": 'Nineteen Eighty-Four',
    "Borrowed": false,
    "Description": " a dystopian novel published in 1949",
    "Authors":[
      {"id":uuid(),
      "First Name":'George',
      "Last Name": 'Orwell'
      }
    ]
  }
]

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


module.exports = { books, newBook }
