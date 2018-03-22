if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
  console.log('DNEYKOV-prod');
} else {
  module.exports = require('./dev');
  console.log('DNEYKOV-dev');
}
