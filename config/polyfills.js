if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

require('whatwg-fetch');
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

Object.assign = require('object-assign');

if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
