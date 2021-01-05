import { Container } from 'typedi'
import { Router, Request, Response } from 'express';
import { TodosController } from '../controllers/TodosController';

const route = Router();

export default (app: Router) => {

  console.log(Container)

  route.post('/todos',  Container.get(TodosController).create);

};