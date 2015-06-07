

var str = "Hello <script>while(1);</script> world!";

// Produce html that could be safely used

var escape = require('escape-html');
var result = escape(str);
console.log(result);