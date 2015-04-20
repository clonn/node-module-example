var r = require('rethinkdb');
var rdbName = 'test';
var TIMMER = 5000;


var connection = null;

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
  if (err) throw err;
  connection = conn;
  function updateAuthro() {
    setTimeout(function () {

      r.table('authors').update({type: new Date().valueOf()}).
      run(connection, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        updateAuthro();
      });



    }, TIMMER);
  }
  updateAuthro();


});

