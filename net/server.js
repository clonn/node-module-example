var net = require('net');

var server = net.createServer(function(c) {
	// socket.write('Echo server\r\n');
  // console.log(c);
	// socket.pipe(socket);


  // c.write('hello\r\n');
  // c.pipe(c);


  c.on("data", function (d) {
    console.log('data from client: ' + d);
    console.log(d);
    console.log(c);
    c.write("i love your client");
  });


  console.log("run one time ?");
  c.pipe(c);

  c.on('end', function() {
    console.log('server disconnected');
  });
});

server.listen(1337, '127.0.0.1');

/*
And connect with a tcp client from the command line using netcat, the *nix
utility for reading and writing across tcp/udp network connections.  I've only
used it for debugging myself.

$ netcat 127.0.0.1 1337

You should see:
> Echo server

*/

/* Or use this example tcp client written in node.js.  (Originated with
example code from
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */
