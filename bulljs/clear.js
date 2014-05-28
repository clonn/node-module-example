var Queue = require('bull');
var STD_QUEUE_NAME = 'test queue';
var queue = Queue(STD_QUEUE_NAME, 6379, '127.0.0.1');

queue.empty().then(function(){
  queue.close();
});
