/**
 * @overview
 *
 * @author
 * @version 2014/05/22
 */

var bq = require('bigquery')
  , prjId = 'true-record-586';

bq.init({
  client_secret: './client_secret_230104804476-obapaltimmh6le2nbd7ksjmq3h4kb5be.apps.googleusercontent.com.json',
  key_pem: './testkey.pem'
});

bq.dataset.list(prjId, function(e,r,d){
  if(e) console.log(e);
  console.log(JSON.stringify(d));
});
