const express = require('express');
const router = express.Router();
const EmployeesController = require('../app/controllers/employees.controller');

router.post('/login', EmployeesController.Login);
router.get('/account/list', EmployeesController.ListAccount);
router.post('/account/create', EmployeesController.CreateAccount);
router.get('/account/:id', EmployeesController.AccountById);
router.get('/account/clock/:id', EmployeesController.ClockAccountById);
router.put('/account/update', EmployeesController.UpdateAccount);
module.exports = router;