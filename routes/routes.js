const express = require('express')
const router = express.Router()
const ctrl = require('../ctrl/ctrl.js')


router.get('/', ctrl.getAll)





module.exports = router
