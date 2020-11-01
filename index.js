const express = require('express')
const app = express()

// import routes module
const index = require('./routes/index');
//const data = (coming soon)

// define route
app.use('/', index);

app.listen(process.env.PORT || 3000, () => {
  console.log(`backend service running`)
})