/**
 * @overview
 *
 * @author
 * @version 2015/02/11
 */


var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000);

