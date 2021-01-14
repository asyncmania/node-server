import request from "supertest";
//import app from "../../src/app";

const app = `http://localhost:5500`;

describe("Todos Route", () => {
  test("adding todo", async () => {
    const todo = {
      title: "First Todo",
      description: "descriptio for first todo",
    };
    const response = await request(app)
      .post("/api/todos")
      .send(todo)
      .expect(200)
      .expect("content-type", /json/);

    expect(response.body).toHaveProperty("title", "First Todo");
    expect(response.body).toHaveProperty(
      "description",
      "descriptio for first todo"
    );
  });

  test("fetching a todo by id", async () => {
    const response = await request(app)
      .get("/api/todos/60009cb3d0e15a23943a82f4")
      .expect(200);

    expect(response.body).toHaveProperty("_id", "60009cb3d0e15a23943a82f4");
  });
});
