const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const compression = require('compression');

const app = express();
app.engine('html', es6Renderer);
app.set('views', 'dist/views');
app.set('view engine', 'html');
app.use(compression());
app.use(express.static('dist/public', {
  index: false
}));

app.get('/', function(req, res) {
  res.render('index', {
    locals: {
      testLiteral: 'Welcome test!',
      reactDom: 'undefined',
      preloadedState: ''
    }
  });
});

app.listen(8080, (error) => {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  console.log('Listening on port: 8080');
});
