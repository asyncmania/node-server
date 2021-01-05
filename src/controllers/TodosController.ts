import { Service } from 'typedi';
import {NextFunction, Request, Response} from 'express'
import { TodoRepository } from '../repositories/TodoRepository';


@Service()
export class TodosController {

  constructor(private todoRepo: TodoRepository) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void>{
    console.log(req)
    const a = await Promise.resolve(2)
    res.send({
      name: "josiah"
    })

   // const t = {title: 'some', description: 'another'}
   //console.log(await this.todoRepo.createTodo(t))
  }

}