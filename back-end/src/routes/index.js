const HttpException = require('../util/HttpException.utils');

const EmployeesRouter = require('./employees.route');
const CustomerRouter = require('./customer.route');
const BranchesRouter = require('./branches.route');
const GroupMedicinesRouter = require('./groups_medicines.route');
const MedicinesRouter = require('./medicines.router');
const PackagingSizeRouter = require('./packaging_size.route');
const AvailablePrescriptionRouter = require('./available_prescription.route');

function route(app) {
  app.get('/', (req, res) => {
    res.send('WELCOME TO BACKEND NODEJS');
  });
  app.use('/employees', EmployeesRouter);
  app.use('/customer', CustomerRouter);
  app.use('/branches', BranchesRouter);
  app.use('/group-medicines', GroupMedicinesRouter);
  app.use('/medicines', MedicinesRouter);
  app.use('/packing-size', PackagingSizeRouter);
  app.use('/available-prescription', AvailablePrescriptionRouter);
  app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
}
module.exports = route;