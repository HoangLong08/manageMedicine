const express = require('express');
const router = express.Router();
const HttpException = require('../../src/util/HttpException.utils');
const BranchesController = require('../app/controllers/branches.controller');

router.post('/list', BranchesController.ListBranches);
// router.post('/create', BranchesController.CreateCustomer);
router.get('/:id', BranchesController.GetBranchesById);
// router.put('/update', BranchesController.UpdateCustomer);
router.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
module.exports = router;