import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000, () => console.log('API running on port: 3000'))
