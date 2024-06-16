var app = app || {};

app.TodoItem = Backbone.Model.extend({
    urlRoot: 'http://localhost:8080/todo_application/todoItems'  // Adjust URL according to your Spring Boot backend API
});
