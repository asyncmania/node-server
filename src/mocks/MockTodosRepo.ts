import { ITodo } from '../interfaces/ITodo';
import { ITodoRepository } from "../repositories/TodoRepository";

export class MockTodoRepos implements ITodoRepository {

 private todos: ITodo[] = [];

constructor() {}

  async createTodo(todo: ITodo): Promise<ITodo> {
     return todo
  }

  async findAll(): Promise<ITodo[]> {
    return this.todos 
  }

  async findById(id: string): Promise<ITodo> {
    const todos = [
      { _id: "rskkssk", title: "some title", description: "some description" },
      {
        _id: "rskdeie",
        title: "some title again",
        description: "some description now",
      },
    ];

    return todos.find((todo) => todo._id === id);
    
  }
}