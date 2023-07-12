'use strict';

const express = require('express');

// константы
const port = 8080;
const host = '0.0.0.0';

// приложение
const app = express();
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>HTML5</title>
  <style>
   article, aside, details, figcaption, figure, footer,header,
   hgroup, menu, nav, section { display: block; }
  </style>
 </head>
 <body>
 <h1>Тестовое задание для Optimacros</h1>
 </body>
</html>`);
});

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});