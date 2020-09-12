// describe("Model specs", function () {
//   it("should add todo item to todos list", function () {
//     const app = new Controller(new Model(), new View());
//     let length = app.model.todos.length;
//     app.model.addTodo("Become NWA World Heavyweight Champion");
//     expect(app.model.todos.length).toBe(length + 1);
//   });

//   it("should edit todo item in todos list", function () {
//     const app = new Controller(new Model(), new View());
//     let revisedTodo = "Summon Beetlejuice";
//     app.model.editTodo(2, revisedTodo);
//     expect(app.model.todos[1].text).toBe("Summon Beetlejuice");
//   });

//   it("should delete todo item from todos list", function () {
//     const app = new Controller(new Model(), new View());
//     let length = app.model.todos.length;
//     app.model.deleteTodo(1);
//     expect(app.model.todos.length).toBe(length - 1);
//   });

//   it("should toggle item in todos list", function () {
//     const app = new Controller(new Model(), new View());
//     let completedState = app.model.todos[1]["complete"];
//     app.model.toggleTodo(2);
//     expect(app.model.todos[1]["complete"]).toBe(!completedState);
//   });
// });

describe("View specs", function () {
  // it("should create an element", function () {
  //   const app = new Controller(new Model(), new View());
  //   let element = app.view.createElement("li");
  //   expect(element).toBeTruthy();
  // });

  it("should get an existing element", function () {
    const app = new Controller(new Model(), new View());
    let elements = [...app.view.todoList.childNodes];
    expect(elements[0]).toBeTruthy();
    console.log(elements[0]); //Not a solution, element[0] is now a p tag
  });

  it("should get a todo item's text", function () {
    // Expectations
  });

  it("should reset the input value to default", function () {
    // Expectations
  });

  it("should display the list of todo items", function () {
    // Expectations
  });
});

describe("Controller specs", function () {
  it("title of the spec", function () {
    // Expectations
  });
});
