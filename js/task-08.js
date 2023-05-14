const formLoginFormEl = document.querySelector('.login-form');

formLoginFormEl.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();
      const { elements: { email, password }
      } = event.currentTarget;
    
    //event.currentTarget.elements.email
    //console.log(`email: ${email.value}\n password: ${password.value}`);
     
    if (email.value === '' || password.value === '') {
        const message = "You must put in your email and password";
        alert(message);
    } else {
        const dateForm = {};

        dateForm.email = email.value;
        dateForm.password = password.value;
        console.log(dateForm);
        event.currentTarget.reset();
    } 
}




