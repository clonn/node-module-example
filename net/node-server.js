/**
 * @overview
 *
 * @author
 * @version 2014/07/26
 */

var http = require("http");

http.createServer(function (req, res) {
  res.end("hello world");
}).listen(1337);

console.log("create server");

