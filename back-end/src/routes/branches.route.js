const express = require('express');
const router = express.Router();
const HttpException = require('../../src/util/HttpException.utils');
const BranchesController = require('../app/controllers/branches.controller');

router.get('/all',BranchesController.ListBranchesLogin);
router.post('/list', BranchesController.ListBranches);
router.post('/create', BranchesController.CreateBranches);
router.get('/:id', BranchesController.GetBranchesById);
router.delete('/:id', BranchesController.DeleteBranchesById);
router.put('/update', BranchesController.UpdateBranches);
router.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
module.exports = router;