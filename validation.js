document.addEventListener("DOMContentLoaded", function(event) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const submitButton = document.getElementById("submit");
    const form = document.getElementById("form");

    // name_error.style.visibility = "hidden";

    form.addEventListener("submit",function(event){
        event.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        let errors = [];

        if (name.length < 3) {
           errors.push("Name must have a minimum of 3 characters");
            document.getElementById("name_warning").style.display = "block";
        }

        if (email === "" || !email.includes("@") || !email.endsWith(".com")) {
            errors.push("Email must not be empty and should contain '@' and '.com'");
            document.getElementById("email_warning").style.display = "block";
        }

        const wordCount = message.trim().split(/\s+/).length;
        console.log(wordCount);
        if (wordCount < 3) {
            errors.push("Message must have a minimum of 3 words");
            document.getElementById("message_warning").style.display = "block";
        }

        if (errors.length >= 1) {
        alert(errors.join("\n"));
            } else {
                // Submit the form
                // Example: document.querySelector("form").submit();
            forms.submit();
        }
    });
  });

