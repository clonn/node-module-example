http = require("http")
port = process.env.PORT || 3000
http.createServer (req, res) ->
  res.end(ker +"ok, run with #{port}")

.listen(port)

console.log "server start in #{port} port"