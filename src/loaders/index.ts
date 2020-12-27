import mongooseLoader from './mongoose'
import containerLoader from './dependencyInjector'

export default async () => {

  await mongooseLoader()

  

}