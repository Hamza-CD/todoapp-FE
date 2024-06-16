define(["index.html"], function(Template) {
 return Backbone.View.extend({
    tagName: 'div',
    className: 'todoItem',

    template:  _.template(Template),

    events: {
        'click .update': 'updateItem',
        'click .delete': 'deleteItem'
    },

    render: function() {
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

})
