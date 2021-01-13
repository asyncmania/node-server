import { Container, Service } from 'typedi'
import { Router } from 'express';
import { TodosController } from '../controllers/TodosController';
import { TodoRepository } from '../repositories/TodoRepository';



export default (app: Router) => {

 // const todosController =  Container.get(TodosController)

 const todosController = new TodosController(Container.get(TodoRepository))


  app.post('/todos', todosController.create.bind(todosController));
  app.get('/todos', todosController.getAll.bind(todosController));
  app.get('/todos/:id', todosController.getOne.bind(todosController));

 

};