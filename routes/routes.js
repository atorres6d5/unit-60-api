const express = require('express')
const router = express.Router()
const ctrl = require('../ctrl/ctrl.js')


router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.makeBook)
router.put('/:id/about', ctrl.update)





module.exports = router
