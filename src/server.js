import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from './App';

const serverRenderer = () => (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`render markup on server for: ${req.originalUrl}`);
  }
  const ctx = {};
  const markup = renderToString((<Router location={req.url} context={ctx}>
    <App />
  </Router>
  ));
  res.render('index', {
    locals: {
      preloadedState: '',
      reactDom: markup,
    },
  });
};

export default serverRenderer;
