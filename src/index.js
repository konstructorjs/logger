const Logger = require('koa-logger');

module.exports = class logger {
  static setup(app) {
    app.use(Logger());
  }
};
