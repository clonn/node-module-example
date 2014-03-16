cluster = require("cluster")
PORT = +process.env.PORT || 1337

handleRequest = (req, res) ->
  switch(req.url)
    when '/error' 
      setTimeout () ->      
        flerb.bark()
      break
    else
      res.end('ok')


if cluster.isMaster
  cluster.fork()
  cluster.fork()

  cluster.on 'disconnect', (worker) ->
    console.error('disconnect!')
    cluster.fork()

else
  domain = require('domain')
  server = require('http').createServer (req, res) ->
    d = domain.create()
    d.on 'error', (er) ->
      console.error('error', er.stack)
      try
        killtimer = setTimeout(() ->
          process.exit(1)
        , 30000)
        
        killtimer.unref()
        server.close()
        cluster.worker.disconnect()
        res.statusCode = 500
        res.setHeader('content-type', 'text/plain')
        res.end('Oops, there was a problem!\n')
      catch er2
        console.error('Error sending 500!', er2.stack)
    
    d.add(req)
    d.add(res)

    d.run () ->
      handleRequest(req, res)

  server.listen(PORT)
  console.log "start server with #{PORT}"


logErrors = (err, req, res, next) ->
  console.error(err.stack)
  next(err)


clientErrorHandler = (err, req, res, next) ->
  if req.xhr
    res.send(500, { error: 'Something blew up!' })
  else
    next(err)

errorHandler = (err, req, res, next) ->
  res.status(500)
  res.render('error', { error: err })

