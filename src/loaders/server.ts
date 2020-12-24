import { Application } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../config'
import routes from '../routes';

export default class Server {
  
  constructor(app: Application){
    this.middlewares(app)
  }

  private middlewares(app: Application) {
     app.use(cors())
     app.use(bodyParser.json())
     app.use(config.api.prefix,  routes())
  }
}