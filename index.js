const express = require('express');
const morgan = require('morgan');
const pool = require('./config.js');
const app = express();
const router = require('./routes/app.js');
const errorHandler = require('./middleware/errorhandling.js');
const uploadRouter = require('./upload.js');

app.use(morgan('common'));
pool.connect((err, res) => {
  console.log(err);
  console.log('connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(uploadRouter);
app.use(router);
app.use(errorHandler);

app.listen(3000);
