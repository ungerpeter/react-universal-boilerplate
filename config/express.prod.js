const express = require('express');
const app = require('../config/express.common');
const serverRenderer = require('../dist/server/server').default;

app.use(express.static('dist/public', {
  index: false
}));
app.use(serverRenderer());

module.exports = app;
