const HttpException = require('../util/HttpException.utils');

const EmployeesRouter = require('./employees.route');
const CustomerRouter = require('./customer.route');
const BranchesRouter = require('./branches.route');
function route(app) {
  app.get('/', (req, res) => {
    res.send('WELCOME TO BACKEND NODEJS');
  });
  app.use('/employees', EmployeesRouter);
  app.use('/customer', CustomerRouter);
  app.use('/branches', BranchesRouter);
  app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
  });
}
module.exports = route;