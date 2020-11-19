import { Router } from 'express'
import { Segments, Joi, celebrate } from 'celebrate'

import UserController from './controllers/UserController'

import userSchema from './schemas/user.schema'

const routes = Router()

routes.get('/users', (req, res) => {
  res.json({ message: 'Hello from Users list' })
})

routes.post('/users/create', celebrate({ [Segments.BODY]: Joi.object().keys(userSchema) }), UserController.create)

routes.put('/users/update/:id', (req, res) => {
  res.json({ message: 'Hello from Users update' })
})

routes.delete('/users/delete/:id', (req, res) => {
  res.json({ message: 'Hello from Users delete' })
})

export default routes
