import { TodosController } from "../src/controllers/TodosController";
import { MockTodoRepos } from "../src/__mocks__/MockTodosRepo";

const mockResponse = () => {
  let res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};



describe("TodosController", () => {

  let todosController: TodosController;
  let res;

  beforeAll(() => {
    todosController = new TodosController(new MockTodoRepos());
    res = mockResponse();
  });

  test("create todo", async () => {
    const todo = {
      _id: "abcd",
      title: "some title",
      description: "some description",
    };

    const mockRequest = (todo) => {
      let req: any = {};
      req.body = todo;
      return req;
    };

    const req = mockRequest(todo);

    await todosController.create(req, res, null);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(todo);
  });

  test("get all Todos", async () => {
    await todosController.getAll(null, res, null);
    expect(res.send).toHaveBeenCalledWith({ todos: [] });
  });

  test("find a todo by id", async () => {

    const mockRequest = (id: string) => {
      let req: any = {};
      req.params = {}
      req.params.id = id
      return req;
    };

    const req = mockRequest('rskdeie')

    await todosController.getOne(req, res, null)

    expect(res.send).toHaveBeenCalledWith({
      _id: "rskdeie",
      title: "some title again",
      description: "some description now",
    })
  })
});
