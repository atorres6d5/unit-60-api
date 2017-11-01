const express = require('express')
const router = express.Router()
const ctrl = require('../ctrl/ctrl.js')


router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.makeBook)
router.put('/:id/about', ctrl.update)
router.delete('/:id', ctrl.remove)
router.get('/:id/authors', ctrl.getEveryone)
router.post('/:id/authors', ctrl.addAuthor)
router.delete('/:bookID/:authorID', ctrl.removeAuthor)





module.exports = router