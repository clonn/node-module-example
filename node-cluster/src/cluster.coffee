cluster = require("cluster")
workers = parseInt(process.env.CLUSTER_WORKERS, 10)
console.log workers
kuli = {}

ports = [3000..3004]


process.env.PORT = 3000
cluster.setupMaster { exec: "out/app.js"}

for num in [4..0]
  worker = cluster.fork()
  worker.process.port = process.env.PORT
  process.env.PORT = parseInt(process.env.PORT, 10) + 1


cluster.on 'exit', (worker, code, signal) ->
  console.log('worker => with pid: ' + worker.process.pid + ', died. Restarting...')
  process.env.PORT = worker.process.port
  cluster.fork()

cluster.on 'online', (worker) -> 
  console.log('worker => start with pid: ' + worker.process.pid + '.')
  console.log('worker => port is: ' + worker.process.port)

  
