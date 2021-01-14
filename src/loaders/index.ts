import mongooseLoader from './mongoose'
import containerLoader from './dependencyInjector'
import Todo from '../models/Todo'

export default async () => {

  try {

   const connection = await mongooseLoader()

   const todoModel = {
    name: 'todoModel',
    model: Todo
  };

   await containerLoader({
     models: [
      todoModel
     ]
   })

    
  } catch (error) {
    console.log(error)
  }


  

}