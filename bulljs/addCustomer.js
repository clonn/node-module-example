var Queue = require('bull');
// var STD_QUEUE_NAME = 'test queue';
// var queue = Queue(STD_QUEUE_NAME, 6379, '127.0.0.1');

var queue = Queue('using. dots. in.name.');

queue.process(function(job, jobDone){
  console.log("job done");
  console.log(job);
  jobDone();
})

queue.add({foo: 'bar'}).then(function(job){
  console.log("run in queue add function");
  console.log(job);
}, function(err){
  console.log(err);
});
