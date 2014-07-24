client = require("./client")
oneTime = true;
function test() {
  setTimeout(function () {

    client.send("hello world", function () {
      console.log("send message done");
    });

    if ( ! oneTime) {
      test();
    }
    // arguments.callee();
  }, 50);

}

test();
