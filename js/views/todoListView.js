// ToDoListView
app.ToDoListView = Backbone.View.extend({
    el: '#todoList',

    initialize: function() {
        this.collection = new app.TodoItems();  // Adjust as needed
        this.collection.fetch({ reset: true });  // Fetch data from backend
        debugger
        this.render();
        this.listenTo(this.collection, 'reset', this.render);
    },
    
    render: function() {
        debugger
        this.$el.empty();
        this.collection.each(function(item) {
            var itemView = new app.ToDoItemView({ model: item });
            this.$el.append(itemView.render().el);
        }, this);
        return this;
    },

    events: {
        'click #addTodoBtn': 'addTodoItem'
    },

    addTodoItem: function() {
        // Logic to add a new ToDo item
        var title = $('#title').val();
        var description = $('#description').val();

        var newTodoItem = new app.TodoItem({
            title: title,
            description: description,
            completed: false,
            user: { id: 1 }  // Replace with actual user ID
        });

        var self = this;
        newTodoItem.save({}, {
            success: function(model, response) {
                console.log('New ToDo item added successfully:', response);
                self.collection.add(model);  // Add new item to the collection
                self.render();  // Re-render the view after adding new item
            },
            error: function(model, response) {
                console.error('Error adding new ToDo item:', response);
            }
        });
    }
});
