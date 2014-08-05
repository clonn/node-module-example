/**
 * @overview
 *
 * @author
 * @version 2014/08/05
 */


var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
      res.send('Hello world\n');
      });

app.listen(PORT, "0.0.0.0");
console.log('Running on http://localhost:' + PORT);

