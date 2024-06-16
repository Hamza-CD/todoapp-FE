// registerView.js

var app = app || {};

app.RegisterView = Backbone.View.extend({
    el: '#app', // Assuming your registration form is rendered inside an element with id 'app'

    events: {
        'submit #registerForm': 'registerUser'
    },

    registerUser: function(e) {
        e.preventDefault();
        var username = this.$('#username').val();
        var password = this.$('#password').val();

        // Perform registration logic via AJAX to your backend
        $.ajax({
            url: 'http://localhost:8080/register',  // Adjust URL according to your backend API
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                console.log('Registration successful:', response);
                // Example: Redirect to login page after successful registration
                Backbone.history.navigate('login', { trigger: true });
            },
            error: function(xhr, status, error) {
                console.error('Registration failed:', error);
            }
        });
    },

    render: function() {
        this.$el.html(`
            <form id="registerForm">
                <input type="text" id="username" placeholder="Username"><br>
                <input type="password" id="password" placeholder="Password"><br>
                <button type="submit">Register</button>
            </form>
        `);
        return this;
    }
});
