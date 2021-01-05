import mongooseLoader from './mongoose'
import containerLoader from './dependencyInjector'

export default async () => {

  try {

   const connection = await mongooseLoader()

   const todoModel = {
    name: 'todoModel',
    model: require('../models/Todo').default
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