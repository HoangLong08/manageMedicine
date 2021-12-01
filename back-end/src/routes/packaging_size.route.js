const express = require('express');
const router = express.Router();
const HttpException = require('../../src/util/HttpException.utils');
const PackingSizeController = require('../app/controllers/packaging_size.controller');

router.get('/list', PackingSizeController.ListPackingSize);
router.post('/create', PackingSizeController.CreatePackagingSize);
router.get('/:id', PackingSizeController.GetPackingSizeById);
router.delete('/:id', PackingSizeController.DeletePackagingSizeById);
router.put('/update', PackingSizeController.UpdatePackagingSize);
router.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
module.exports = router;