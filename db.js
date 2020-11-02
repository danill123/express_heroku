const mongoose = require("mongoose");

// credentials
const MONGO_USERNAME = 'holistics';
const MONGO_PASSWORD = 'badboy12';
const MONGO_HOSTNAME = 'cluster0.fzfso.mongodb.net';
const MONGO_DB = 'data_lakes';

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});