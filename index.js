const express = require('express');
const morgan = require('morgan');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static('client'));

app.listen(port, () => {
  `server running at port ${port}`
});
