var app = app || {};

app.TodoItems = Backbone.Collection.extend({
    model: app.TodoItem,
    url: 'http://localhost:8080/todo_application/todoItems'  // Adjust URL according to your Spring Boot backend API
});
