var Queue = require('bull');

console.log("queue - message");
var sendQueue = Queue("server one message queue", 6379, '127.0.0.1');
var receiveQueue = Queue("server two message queue", 6379, '127.0.0.1');

// we can send any JSON stringfiable data
console.log("send queue - message");
sendQueue.add({msg: 'this is a test message'});

// And receive as well
receiveQueue.process(function(msg, msgDone){
  console.log(msg);
  console.log('Received message from server two: %s', msg);
  msgDone();
});
