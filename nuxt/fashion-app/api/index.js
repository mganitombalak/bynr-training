const express = require('express');
const app = express();

app.get('/myendpoint', (req, res) => {
  res.status(200).json({ result: 'ok' });
});

app.get('/categories', (req, res) => {
  res.status(200).json({ result: 'ok2' });
});

module.exports = {
  path: '/api',
  handler: app
}
