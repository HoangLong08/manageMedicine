const express = require('express');
const router = express.Router();
const HttpException = require('../../src/util/HttpException.utils');
const MedicinesController = require('../app/controllers/medicines.controller');

router.post('/list', MedicinesController.ListMedicines);
router.post('/create', MedicinesController.CreateMedicines);
router.get('/:id', MedicinesController.GetMedicinesById);
router.delete('/:id', MedicinesController.DeleteMedicinesById);
// router.put('/update', BranchesController.UpdateBranches);
router.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
module.exports = router;