// appRouter.js

var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        '': 'todoList',             // Default route to todoList (home screen)
        'add': 'addTodoItem',       // Route to add new ToDo item
        'delete/:id': 'deleteTodoItem'  // Route to delete ToDo item by ID
    },

    initialize: function() {
        Backbone.history.start();
    },

    todoList: function() {
        var todoListView = new app.ToDoListView();
        todoListView.render();
    },

    addTodoItem: function() {
        // Logic to add new ToDo item
        var addView = new app.AddTodoView();
        addView.render();
    },

    deleteTodoItem: function(id) {
        // Logic to delete ToDo item by ID
        var todo = app.todoList.get(id);
        if (todo) {
            todo.destroy();
        } else {
            console.log('ToDo item not found');
        }
        // Redirect to home view after deletion (optional)
        this.navigate('', { trigger: true });
    }
});
