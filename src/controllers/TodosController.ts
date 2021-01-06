import { Service } from 'typedi';
import {NextFunction, Request, Response} from 'express'
import { TodoRepository } from '../repositories/TodoRepository';


@Service()
export class TodosController {

  constructor(private todoRepo: TodoRepository) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void>{
    const a = await Promise.resolve(2)
    res.send({
     a
    })
  }

}