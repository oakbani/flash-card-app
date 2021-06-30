const router = require('express')
const TestController = require('../controllers/testController')


const router = new Router()

router.get('/admin', TestController.helloWorld)