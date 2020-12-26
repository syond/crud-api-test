import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/api/v1/users', (req, res) => {
  res.json({ message: 'Hello from Users list' })
})

routes.post('/api/v1/users/create', UserController.create)

routes.put('/api/v1/users/:id/update', (req, res) => {
  res.json({ message: 'Hello from Users update' })
})

routes.delete('/api/v1/users/:id/delete', UserController.delete)

export default routes
