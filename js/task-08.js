const form = document.querySelector('.login-form');
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

form.addEventListener('submit', formProcessing);
        
function formProcessing (event) {
  event.preventDefault();
  
  if (!emailInput.value || !passwordInput.value) {
    alert('Please fill in all fields');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    console.log(formData);
    form.reset();
  }
};