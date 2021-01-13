import { Service, Inject } from "typedi";
import { ITodo } from '../interfaces/ITodo';




export interface ITodoRepository {
  
  createTodo(todo: ITodo): Promise<ITodo>

  findById(id: string): Promise<ITodo>

  findAll(): Promise<ITodo[]>
}



@Service()
export class TodoRepository implements ITodoRepository {
 
  constructor( @Inject("todoModel") private todoModel) {}

  createTodo(todo: ITodo) {
    return this.todoModel.create(todo)
  }

  findById(id: string){
    return this.todoModel.findOne({_id: id})
  }

  findAll() {
    return this.todoModel.find()
  }


}
