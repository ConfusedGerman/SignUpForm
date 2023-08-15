document.addEventListener("DOMContentLoaded", function() {
    const password1 = document.getElementById("user_password");
    const password2 = document.getElementById("user_password_conformation");
    
    password2.addEventListener("input", function() {
        if (password1.value !== password2.value) {
            password2.setCustomValidity("Passwords do not match.");
        } else {
            password2.setCustomValidity("");
        }
    });
});
