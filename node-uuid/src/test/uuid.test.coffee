'use strict'
should = require 'should'

# db = require("../mysql")
# Schema = require('jugglingdb').Schema

# console.log db

describe 'use node-uuid', () ->
  it ", uuid format check", (done) ->
    if db.client.state is "authenticated"
      console.log "connect success"
      done()



