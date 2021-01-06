import 'reflect-metadata'; // We need this in order to use @Decorators
import express, { Application }from 'express'
import config from './config'
import Server from './loaders/server'
import { TodoRepository } from './repositories/TodoRepository'
import { Service, Inject, Container } from "typedi";
import { TodosController } from './controllers/TodosController';
import loaders from './loaders'


const app = express()


app.listen(config.port, async () => {
  
  await loaders()
  const server: Server = new Server(app)


  console.log(`
  ################################################
  🛡️  Server listening on port: ${config.port} 🛡️
  ################################################
  `)
}).on('error', (err) => {
  console.log(err)
  process.exit(1)
})
