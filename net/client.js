var net = require('net');

var client = new net.Socket();
var msgQueue = [];

client.connect(1337, '127.0.0.1', function() {
  console.log('Connected');
  client.ready = true;
  // client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
  console.log('Received: ' + data);
  // client.write('i love you, Server');
  // client.destroy(); // kill client after server's response
});

client.on('close', function() {
  console.log('Connection closed');
});

// client.write("hello");

client.send = function (msg, cb) {
  var cb = cb || [];

  if ( ! client.ready) {
    // msgQueue.push(msg);
    return cb();
  }

  client.write(msg);
  return cb();
}

module.exports = client;
