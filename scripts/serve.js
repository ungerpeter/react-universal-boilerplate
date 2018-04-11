const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());
app.use(express.static('dist'));

app.listen(8080, (error) => {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  console.log('Listening on port: 8080');
});
