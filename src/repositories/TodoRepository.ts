import { Service, Inject, Container } from "typedi";
import { ITodo } from '../interfaces/ITodo';
import Todo from '../models/Todo'
import mongoose, {Model} from "mongoose";



@Service()
export class TodoRepository {
  
  constructor(@Inject("todoModel") private todoModel) {}

  createTodo(props: ITodo) {
    return this.todoModel.create(props)
  }


}
