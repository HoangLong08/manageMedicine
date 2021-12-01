const express = require('express');
const router = express.Router();
const HttpException = require('../../src/util/HttpException.utils');
const AvailablePrescriptionController = require('../app/controllers/available_prescriptions.controller');

router.post('/list', AvailablePrescriptionController.ListAvailablePrescription);
router.post('/create', AvailablePrescriptionController.CreateAvailablePrescription);
router.get('/:id', AvailablePrescriptionController.GetAvailablePrescriptionById);
router.delete('/:id', AvailablePrescriptionController.DeleteAvailablePrescriptionById);
router.put('/update', AvailablePrescriptionController.UpdateAvailablePrescription);
router.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
module.exports = router;