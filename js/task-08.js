const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = registerForm.elements.email.value;
    const password = registerForm.elements.password.value;

    if (email === "" || password === "") {
        alert ("All fields must be filled in")
    }

   const credentials = {
       email: email,
       password: password
   }
    console.log(credentials);
    registerForm.reset()
}