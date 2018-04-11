const spdy = require('spdy');
const pem = require('pem');
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static('dist'));

pem.createCertificate({ days: 1, selfSigned: true }, (err, keys) => {
  if (err) {
    throw err;
  }
  spdy.createServer({
    key: keys.serviceKey,
    cert: keys.certificate,
  }, app).listen(8080, (error) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    }
    console.log('Listening https on port: 8080');
  });
});
