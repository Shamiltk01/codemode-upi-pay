const upi = require('../lib/upi');

module.exports = upi.handler({
  basePath: '/api/upi',
  apiKey: process.env.UPI_API_KEY
});