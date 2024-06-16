var app = app || {};

app.User = Backbone.Model.extend({
    urlRoot: 'http://localhost:8080/todo_application/users'  // Adjust URL according to your Spring Boot backend API
});
