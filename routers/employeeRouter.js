const express  = require("express")
const router = express.Router()
const {getAllEmployee, createAEmployee, getAEmployee , getEmployeeBYId, updateAEmployee} = require('../controllers/employeeController')

router.route('/').get(getAllEmployee).post(createAEmployee)

router.route('/:id').get(getEmployeeBYId ,getAEmployee).patch(getEmployeeBYId,updateAEmployee)

module.exports = router