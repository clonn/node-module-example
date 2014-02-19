'use strict'
should = require 'should'

db = require("../mysql")
Schema = require('jugglingdb').Schema

# console.log db

describe 'connect mysql database', () ->
  it ", connect test", (done) ->
    if db.client.state is "authenticated"
      console.log "connect success"
      done()

describe 'basic query method', () ->
  it ', basic query', (done) ->
    db.client.query 'SELECT 1 + 1 AS solution', (err, rows, fields) ->
      console.log('The solution is: ', rows[0].solution)
      # db.client.end()
      # console.log db.client.state
      done()

  it ', basic query', (done) ->
    db.client.query 'SELECT 1 + 1 AS solution', (err, rows, fields) ->
      console.log('The solution is: ', rows[0].solution)
      # db.client.end()
      # console.log db.client.state
      done()


UserData = db.define 'UserData',
    email: { type: String, null: false, index: true }
    name: String
    bio: Schema.Text
    birthDate: Date
    pendingPeriod: Number
    createdByAdmin: Boolean

describe 'Test migrate to mysql', () ->
  it "edit for basic user table schema", (done) ->

    UserData = db.define 'UserData',
        email: { type: String, null: false, index: true }
        name: String,
        bio: Schema.Text,
        birthDate: Date,
        pendingPeriod: Number,
        createdByAdmin: Boolean,

    db.isActual (err, actual) ->

      if actual
        return done()
    
      db.automigrate () ->
        done()

      # db.autoupdate () ->
      #   done()

describe 'jugglingDB CRUD in MySQL', () ->
  it "Create / Add data in database", (done) ->
    console.log "run in create user data"
    userData = new UserData()
    userData.email = "test@test.com"
    userData.name = "test"
    userData.bio = "this is my test bio"
    userData.birthDate = new Date()
    userData.pendingPeriod = 100
    userData.createdByAdmin = true
    userData.save () ->
      console.log "save user data success"
      done()
    # UserData.create(cb);


