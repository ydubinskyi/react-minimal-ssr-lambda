const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

const template = require('./dist/template');
const ssr = require('./dist/renderer');

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

// server rendered home page
app.get('*', (req, res) => {
  const content = ssr();

  const response = template('React minimal SSR by Lambda | PGS AllFE', content);

  res.setHeader('Cache-Control', 'assets, max-age=604800');

  res.send(response);
});

module.exports.render = serverless(app);
