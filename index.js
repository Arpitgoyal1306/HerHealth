const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    messageBox.textContent = "Thank you for reaching out! Your message has been sent.";
    messageBox.style.display = "block";
    messageBox.style.color = "green";

    form.reset();
});
inputs.forEach(input => {
    input.addEventListener("input", () => {
        messageBox.style.display = "none";
    });
});
