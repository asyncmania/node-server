import { Router } from 'express'
import todosRoute from './todoRoute'

export default () => {
  const app = Router()
   todosRoute(app)
  return app
}