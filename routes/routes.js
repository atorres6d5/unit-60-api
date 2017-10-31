const express = require('express')
const router = express.Router()
const ctrl = require('../ctrl/ctrl.js')


router.get('/', ctrl.getAll)
router.post('/', ctrl.makeBook)





module.exports = router
