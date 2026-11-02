const {
  createUpiPay,
  PostgresStore
} = require('..');

const upi = createUpiPay({
  vpa: process.env.UPI_ID,

  payeeName: process.env.UPI_NAME,

  gmail: {
    user: process.env.GMAIL_ADDRESS,
    appPassword: process.env.GMAIL_APP_PASSWORD
  },

  store: new PostgresStore({
    connectionString: process.env.DATABASE_URL
  })
});

module.exports = upi;