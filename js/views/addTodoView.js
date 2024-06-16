// addTodoView.js
var app = app || {};

$(function() {
    app.AddTodoView = Backbone.View.extend({
        el: '#popupForm',

        initialize: function() {
            // No initial rendering needed
        },

        events: {
            'click #saveBtn': 'saveTodoItem'
        },

        saveTodoItem: function() {
            var newTodoItem = new app.ToDoItem({
                title: $('#title').val(),
                description: $('#description').val(),
                completed: false,  // Assuming default value for completed
                user: { id: 1 }   // Replace with actual user ID
            });
        
            newTodoItem.save({}, {
                success: function(model, response) {
                    console.log('New item saved:', response);
                    $('#popupForm').hide();  // Hide the popup after saving
                    app.todoListView.collection.add(newTodoItem);  // Add new item to the collection
                },
                error: function(model, response) {
                    console.error('Error saving item:', response);
                    alert('Error saving item. Please try again.');
                }
            });
        }
    });
});
