const password1 = document.getElementById("user_password");
const password2 = document.getElementById("user_password_conformation");
const checkButton = document.getElementById("submit_button");

checkButton.addEventListener("click", () => {
    if (password1.value === password2.value) {
    } else {
    }
});
