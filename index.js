const express = require('express')
const app = express()
const db = require('./db'); // database driver & credentials

// import routes module
const index = require('./routes/index');
//const data = (coming soon)

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// define route
app.use('/', index);

app.listen(process.env.PORT || 3000, () => {
  console.log(`backend service running`)
})