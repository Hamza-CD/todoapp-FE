var app = app || {};

app.LoginView = Backbone.View.extend({
    el: '#app',

    events: {
        'submit #loginForm': 'login'
    },

    login: function(e) {
        e.preventDefault();
        var username = this.$('#username').val();
        var password = this.$('#password').val();

        // Perform authentication via AJAX to Spring Boot backend
        $.ajax({
            url: 'http://localhost:8080/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: function(response) {
                // Handle successful login (redirect to ToDoList page, etc.)
                console.log('Login successful:', response);
                // Example redirect to ToDoList page
                Backbone.history.navigate('todoList', { trigger: true });
            },
            error: function(xhr, status, error) {
                // Handle login failure (display error message, etc.)
                console.error('Login failed:', error);
            }
        });
    },

    render: function() {
        this.$el.html(`
            <form id="loginForm">
                <input type="text" id="username" placeholder="Username"><br>
                <input type="password" id="password" placeholder="Password"><br>
                <button type="submit">Login</button>
            </form>
        `);
        return this;
    }
});
