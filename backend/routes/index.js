var express = require('express')
var router = express.Router()
var stores = require('../__mocks__/stores.json')

router.get('/store', function (req, res) {
  res.json(stores)
})

router.get('/store/:storeId', function (req, res) {
  const storeId = req.params.storeId
  const store = stores.find(store => store.id == storeId)
  res.json(store)
})

module.exports = router
