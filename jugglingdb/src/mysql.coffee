Schema = require("jugglingdb").Schema

db = new Schema("mysql",
  database: "myapp_test"
  username: "user"
  password: "user1234"
)

db.client.query('SELECT 1 + 1 AS solution', (err, rows, fields) ->
  if err
    throw err
  console.log('The solution is: ', rows[0].solution)
  db.client.end()
)



# db.client.end()
# connection.disconnect()
# console.log db

# db.adapter.query('SHOW TABLES', -> (err, data) 
#   console.log err
#   console.log data    
# )

# UserData = db.define("UserData",
#   email:
#     type: String
#     null: false
#     index: true

#   name: String
#   bio: Schema.Text
#   birthDate: Date
#   pendingPeriod: Number
#   createdByAdmin: Boolean
# ,
#   indexes:
#     index0:
#       columns: "email, createdByAdmin"
# )