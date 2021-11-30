const express = require('express');
const router = express.Router();
const HttpException = require('../../src/util/HttpException.utils');
const EmployeesController = require('../app/controllers/employees.controller');

router.post('/login', EmployeesController.Login);
router.get('/account/list', EmployeesController.ListAccount);
router.post('/account/create', EmployeesController.CreateAccount);
router.get('/account/:id', EmployeesController.AccountById);
router.get('/account/clock/:id', EmployeesController.ClockAccountById);
router.put('/account/update', EmployeesController.UpdateAccount);
router.post('/list', EmployeesController.ListEmployees);
router.get('/:id', EmployeesController.EmployeesByID);
router.get('/clock/:id', EmployeesController.EmployeesClockById);
router.post('/create', EmployeesController.EmployeesCreate);
router.put('/update', EmployeesController.EmployeesUpdate);
router.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
module.exports = router;