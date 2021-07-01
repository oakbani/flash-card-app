var express = require('express')
var router = express.Router()

const testController = require('../controllers/testController')

router.get('/helloWorld', testController.helloFunc);
router.post('/addRecord', testController.addRecord);

module.exports = router;