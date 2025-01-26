// script.js

// Function to show an alert message
function showAlert() {
    alert("Button clicked!");
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", showAlert);
    }
});