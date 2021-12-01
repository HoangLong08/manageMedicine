const express = require('express');
const router = express.Router();
const HttpException = require('../../src/util/HttpException.utils');
const GroupMedicinesController = require('../app/controllers/groups_medicines.controller');

router.post('/list', GroupMedicinesController.ListGroupMedicines);
router.post('/create', GroupMedicinesController.InsertGroupMedicines);
router.get('/:id', GroupMedicinesController.GetGroupMedicinesById);
router.delete('/:id', GroupMedicinesController.DeleteGroupMedicinesById);
router.put('/update', GroupMedicinesController.UpdateGroupMedicines);
router.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
module.exports = router;