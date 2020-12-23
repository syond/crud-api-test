import { Router } from 'express'
// import { Segments, Joi, celebrate } from 'celebrate'

import UserController from './controllers/UserController'

// import userSchema from './schemas/user.schema'

const routes = Router()

routes.get('/api/v1/users', (req, res) => {
  res.json({ message: 'Hello from Users list' })
})

routes.post('/api/v1/users/create', UserController.create)

routes.put('/api/v1/users/update/:id', (req, res) => {
  res.json({ message: 'Hello from Users update' })
})

routes.delete('/api/v1/users/delete/:id', (req, res) => {
  res.json({ message: 'Hello from Users delete' })
})

export default routes
