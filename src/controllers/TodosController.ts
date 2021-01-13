
import { NextFunction, Request, Response } from "express";
import { ITodoRepository } from '../repositories/TodoRepository';



export class TodosController {

  /* @Inject()
  private todoRepository: TodoRepository */

  private todoRepository: ITodoRepository

  constructor( todoRepository: ITodoRepository){
    this.todoRepository = todoRepository
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const _todo = req.body
    const todo = await this.todoRepository.createTodo(_todo);
    res.status(200).json(todo)
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const todos = await this.todoRepository.findAll()
    res.send({todos})
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
      const todo = await this.todoRepository.findById(req.params.id)
      res.send(todo)
  }
}
