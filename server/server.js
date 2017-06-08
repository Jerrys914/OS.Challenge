const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/')));
app.use(express.static(path.join(__dirname, '/../client/app')));

let port = process.env.PORT || 3000;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});

module.exports = app;