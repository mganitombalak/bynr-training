const express = require('express');
const fs = require('fs');
const app = express();

app.get('/myendpoint', (req, res) => {
  res.status(200).json({ result: 'ok' });
});

app.get('/categories', (req, res) => {
  // fs.readFileSync()
  res.status(200).json({ result: 'ok2' });
});

module.exports = {
  path: '/api',
  handler: app
}
