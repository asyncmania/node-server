import 'reflect-metadata'; // We need this in order to use @Decorators
import express, { Application }from 'express'
import config from './config'
import Server from './loaders/server'
import loaders from './loaders'


const app = express()


export async function startServer() {

  await loaders()
  
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

export default app;



