const express = require('express');
const path = require('path');

app = express();
const expressWs = require('express-ws')(app);

app.use('/chat', require('./ws'));

app.use('/assets', express.static(path.join(__dirname, '..', 'dist')));
app.use('/vendor', express.static(path.join(__dirname, '..', 'node_modules')));

app.use('/', (req, res, next) => {
  if (req.path.match(/\.(html|css|js)$/)) {
    next();
  }
  else {
    res.sendFile(path.join(__dirname, '..', 'client/index.html'));
  }
});


const port = process.env.port || 8080;
app.listen(port);