import express, { Application }from 'express'
import config from './config'
import Server from './loaders/server'


const app = express()

const server: Server = new Server(app)

app.listen(config.port, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${config.port} 🛡️
 ################################################
  `)
}).on('error', (err) => {
  console.log(err)
  process.exit(1)
})