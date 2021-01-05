import { Container } from "typedi";
import config from "../config";
import { TodosController } from '../controllers/TodosController';

export default ({ models }: { models: { name: string; model: any }[] }) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.model);
    })

   // Container.set('todosController', TodosController)

  } catch (error) {
    throw error;
  }
};
