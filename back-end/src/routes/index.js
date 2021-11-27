
function route(app) {
  app.get('/', (req, res) => {
    res.send('WELCOME TO BACKEND NODEJS');
  });
}
module.exports = route;