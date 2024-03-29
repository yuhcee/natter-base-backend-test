const express = require('express');
const bodyParser = require('body-parser');
const validateRoute = require('./routes/api/data');
const removeInputRoute = require('./routes/api/input');
const aladdinRoute = require('./routes/api/aladdin');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', validateRoute);
app.use('/api', aladdinRoute);
app.use('/api/remove', removeInputRoute);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Natter Base API.');
});

module.exports = app;
