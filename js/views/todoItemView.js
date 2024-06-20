// ToDoItemView
app.ToDoItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'todoItem',


    events: {
        'click .update': 'updateItem',
        'click .delete': 'deleteItem'
    },

    render: function() {
        debugger
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    updateItem: function() {
        // Logic to update the ToDo item
        // Implement this as needed based on your UI/UX
        alert('Update functionality to be implemented');
    },

    deleteItem: function() {
        // Logic to delete the ToDo item
        this.model.destroy();
        this.remove();
    }
});
