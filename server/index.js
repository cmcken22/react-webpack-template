const config          = require('./config/index.js');
const express         = require("express");
const app             = express();
const bodyParser      = require("body-parser");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + './../'));

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
