// main.js - placeholder content
// main.js

// Example: Form Validation on Login and Register Page
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            const inputs = form.querySelectorAll("input[required]");
            let valid = true;

            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = "1px solid red";
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (!valid) {
                event.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    });

    // Seat selection logic (if seat buttons exist)
    const seatButtons = document.querySelectorAll(".seat");

    seatButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Toggle selected state
            if (btn.classList.contains("selected")) {
                btn.classList.remove("selected");
                btn.style.backgroundColor = "#b3e5fc";
            } else {
                btn.classList.add("selected");
                btn.style.backgroundColor = "#4fc3f7";
            }
        });
    });
});
