import * as Loadable from 'react-loadable';
const chalk = require('chalk').default;
const app = require('../config/express.prod');

const port = parseInt(process.env.PORT, 10) || 8080;
const host = process.env.HOST || '0.0.0.0';

Loadable.preloadAll().then(() => {
  app.listen(port, host, (err) => {
    if (err) return console.log(err);
    console.log(chalk.cyan(`Starting the production server on port: ${port}...\n`));
  });
});

['SIGINT', 'SIGTERM'].forEach((sig) => {
  process.on(sig, () => {
    process.exit();
  });
});
