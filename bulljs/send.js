var Queue = require('bull');

var queue = Queue('using. dots. in.name.');
queue.add({foo: 'bar'});
// .then(function(job, done){
//   console.log("run in queue add function");
//   console.log(job);
// }, function(err){
//   console.log("run error");
//   console.log(err);
// });
//
// console.log(queue);
