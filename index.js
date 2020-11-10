const express = require('express')
const app = express()
const db = require('./db'); // database driver & credentials
const cors = require("cors");

// import routes module
const index = require('./routes/index');
const data = require('./routes/data');

// middleware
app.disable('x-powered-by')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors())

// define route
app.use('/', index);
app.use('/data', data);

app.listen(process.env.PORT || 3000, () => {
  console.log(`backend service running`)
})