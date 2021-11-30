const express = require('express');
const router = express.Router();
const HttpException = require('../../src/util/HttpException.utils');
const CustomerController = require('../app/controllers/customer.controller');

router.post('/list', CustomerController.ListCustomer);
router.post('/create', CustomerController.CreateCustomer);
router.get('/:id', CustomerController.GetCustomerById);
router.put('/update', CustomerController.UpdateCustomer);
router.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
module.exports = router;