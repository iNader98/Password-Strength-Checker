const input = document.querySelector("input"),
    showHide = document.querySelector(".show-hide"),
    indicator = document.querySelector(".indicator"),
    iconText = document.querySelector(".icon-text"),
    text = document.querySelector(".text");

    // js code to show and hide password

    showHide.addEventListener("click", ()=> {
        if(input.type === "password") {
            input.type = "text";
        showHide.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        input.type = "password";
        showHide.classList.replace("fa-eye", "fa-eye-slash");
    }
    });


    // js code to show password strength (with regex)

    let alphabet = /[a-zA-Z]/;
        numbers = /[0-9]/; 
        characters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=]/;

        input.addEventListener("keyup", ()=> {
            indicator.classList.add("active");

            let val = input.value;

            if(val.match(alphabet) || val.match(numbers) || val.match(characters)) {
                text.textContent = "Password is weak";
                iconText.style.color = "#ff6333";
                showHide.style.color = "#ff6333";
                input.style.borderColor = "#ff6333";
            }

            if(val == "") {
                indicator.classList.remove("active");
                iconText.style.color = "#a6a6a6";
                showHide.style.color = "#a6a6a6";
                input.style.borderColor = "#a6a6a6";
            }
            if(val.match(alphabet) && val.match(numbers) && val.length >= 6) {
                text.textContent = "Password is medium";
                iconText.style.color = "#cc8500";
                showHide.style.color = "#cc8500";
                input.style.borderColor = "#cc8500";
            }
            if(val.match(alphabet) && val.match(numbers) && val.match(characters) && val.length >= 8) {
                text.textContent = "Password is strong";
                iconText.style.color = "#22c32a";
                showHide.style.color = "#22c32a";
                input.style.borderColor = "#22c32a";
            }
        });