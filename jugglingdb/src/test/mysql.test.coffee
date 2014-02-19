'use strict'
should = require 'should'

db = require("../mysql")

console.log db

describe 'connect mysql database', () ->
  it ", connect test", (done) ->
    if db.client.state is "authenticated"
      console.log "connect success"
      # db.client.end()
      done()

describe 'connect with mysql and run with test', () ->
  it 'get / login account test', (done) ->
    db.client.query('SELECT 1 + 1 AS solution', (err, rows, fields) ->
      console.log('The solution is: ', rows[0].solution)
      # db.client.end()
      # console.log db.client.state
      done()
    )