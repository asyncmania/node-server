import { Container, Service } from 'typedi'
import { Router, Request, Response } from 'express';
import { TodosController } from '../controllers/TodosController';

export default (app: Router) => {

  app.get('/todos', Container.get(TodosController).create);

};