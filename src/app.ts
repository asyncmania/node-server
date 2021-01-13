import 'reflect-metadata'; // We need this in order to use @Decorators
import express, { Application }from 'express'
import config from './config'
import Server from './loaders/server'




async function startServer() {

  const app = express()

  await require('./loaders').default()
  
   new Server(app)

  app.listen(config.port, async () => {
    
    console.log(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
    `)
  }).on('error', (err) => {
    console.log(err)
    process.exit(1)
  })

}


startServer()


