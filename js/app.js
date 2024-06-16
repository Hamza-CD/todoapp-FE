var app = app || {};

$(function() {
    // Show popup form for adding a new item
    $('#addNewItemBtn').click(function() {
        $('#popupForm').show();
    });

    // Save new ToDoItem
    $('#saveBtn').click(function() {
        var title = $('#title').val();
        var description = $('#description').val();
        var userId = 52; // Replace with actual user ID

        var newTodoItem = {
            title: title,
            description: description,
            completed: false,
            user: { id: userId }  // Assuming user ID is required
        };

        // Send POST request to create a new ToDoItem
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/todo_application/todoitems/' + userId,
            contentType: 'application/json',
            data: JSON.stringify(newTodoItem),
            success: function(response) {
                console.log('New item saved:', response);
                $('#popupForm').hide();  // Hide the popup after saving

                // Optionally, update the UI to display the new item
                $('#todoList').append('<div><h3>' + title + '</h3><p>' + description + '</p></div>');
            },
            error: function(xhr, status, error) {
                console.error('Error saving item:', error);
                alert('Error saving item. Please try again.');
            }
        });
    });
});
