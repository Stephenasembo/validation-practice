const country = document.querySelector('#country');
const email = document.querySelector('#email');
const zipCode = document.querySelector('#zipCode');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('form');
const body = document.querySelector('body');

let inputElements = document.querySelectorAll('input');
inputElements = Array.from(inputElements);

// Add a div to each input will be used to display error message
let inputErrorParas = document.querySelectorAll('p');
inputErrorParas = Array.from(inputErrorParas);
inputErrorParas.forEach((para) => {
  let divError = document.createElement('div');
  para.appendChild(divError);
  divError.classList.toggle('error');
})

submitBtn.addEventListener('click', checkBlanks);

function checkBlanks(event, input){
  if (event) {
    event.preventDefault();
  }

  if (input === 'country' || !input){
    if (!country.value.length) {
      let errorMsg = 'Please enter the name of your country';
      displayError('#countryPara', errorMsg);
      return;
    }
  }

  if (input === 'email' || !input){
    if (!email.value.length) {
      let errorMsg = 'Please enter your email address';
      displayError('#emailPara', errorMsg);
      return;
    }
  }

  if (input === 'zipCode' || !input){
    if (!zipCode.value.length) {
      let errorMsg = 'Please enter your zip code';
      displayError('#zipCodePara', errorMsg);
      return;
    }
  }

  if (input === 'password' || !input){
    if (!password.value.length) {
      let errorMsg = 'Please enter your password';
      displayError('#passwordPara', errorMsg);
      return;
    }
  }

  if (input === 'passwordConfirmation' || !input){
    if (!passwordConfirmation.value.length) {
      let errorMsg = 'Please confirm password entered';
      displayError('#passConfirmPara', errorMsg);
      return true;
    }
    return false;
  }
}

// Display error if present
function displayError(paragraph, text){
  const para = document.querySelector(paragraph);
  const divError = para.querySelector('div');
  divError.textContent = text;
  let input = para.querySelector('input');
  input.classList.add('invalid');
  divError.classList.add('active')
}

// Validate elements when they lose focus
inputElements.forEach((element) => {
  element.addEventListener('blur', validateElement);
})

let userPassword = null;
function validateElement(event) {
  let input = event.target.id;
  switch (input){
    case 'country':
      checkBlanks(event = '', 'country');
      if (country.checkValidity()) {
        removeError('#countryPara');
      }
      break;

    case 'email':
      checkBlanks(event = '', 'email');
      if (email.validity.typeMismatch) {
        let errorMsg = 'Invalid email format. Example: john@gmail.com';
        displayError('#emailPara', errorMsg);
      }
      if (email.checkValidity()) {
        removeError('#emailPara');
      }
      break;

    case 'zipCode':
      checkBlanks(event = '', 'zipCode');
      if (zipCode.checkValidity()) {
        removeError('#zipCodePara');
      }
      break;
      
    case 'password':
      checkBlanks(event = '', 'password');
      userPassword = password.value;
      if (password.checkValidity()) {
        removeError('#passwordPara');
      }
      if (userPassword === passwordConfirmation.value && userPassword) {
        removeError('#passConfirmPara');
        passwordConfirmation.style.backgroundColor = '#86efac';
      }
      break;

    case 'passwordConfirmation':
      let blank = checkBlanks(event = '', 'passwordConfirmation');
      if (!blank) {
        if (userPassword) {
          if (userPassword === passwordConfirmation.value){
            removeError('#passConfirmPara');
            passwordConfirmation.style.backgroundColor = '#86efac';
          } else {
            let errorMsg = `Passwords don't match`;
            displayError('#passConfirmPara', errorMsg);
            passwordConfirmation.style.backgroundColor = '#fca5a5';
          }
        } else {
          let errorMsg = 'Please enter your password first'
          displayError('#passConfirmPara', errorMsg);
        }
      }

      break;      
  }
}

// If error is fixed, remove error message
function removeError(paragraph) {
  const para = document.querySelector(paragraph);
  const divError = para.querySelector('div');
  divError.textContent = '';
  divError.classList.remove('active')
}

// Display success message if form successfully submitted
function submitForm() {
  if (form.checkValidity()) {
    body.innerHTML = `
    <p>Successful form submission. Good job!</p>
    <a href="./index.html">Submit again</a>`
  }
}

submitBtn.addEventListener('click', submitForm);