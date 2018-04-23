const path = require('path');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const compression = require('compression');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const bodyParser = require('body-parser');

const sessionConfig = () => {
  const FileStore = (sessionFileStore)(session);
  return session({
    secret: 'xAVVssPTaU3qq3HgeQZud6tkz6',
    saveUninitialized: true,
    store: new FileStore({
      path: path.join(__dirname, '..', '.sessions'),
      secret: 'xAVVssPTaU3qq3HgeQZud6tkz6'
    }),
    resave: false,
    rolling: true,
    httpOnly: true,
    cookie: { maxAge: 604800000 }, // week
  });
};

const app = express();

/*app.engine('html', es6Renderer);
app.set('views', 'dist/views');
app.set('view engine', 'html');*/
app.use(compression());
app.use(bodyParser.json());
//app.use(express.static('dist/public', {index: false}));
app.use(sessionConfig());

module.exports = app;
