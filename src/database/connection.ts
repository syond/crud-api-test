import mongoose from 'mongoose'

const connection = mongoose

connection.connect(
  'mongodb://127.0.0.1:27017/crud-api-test',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => console.log(err)
)

export default connection
