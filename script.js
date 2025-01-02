const country = document.querySelector('#country');
const email = document.querySelector('#email');
const zipCode = document.querySelector('#zipCode');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const submitBtn = document.querySelector('#submit');

let inputElements = document.querySelectorAll('input');
inputElements = Array.from(inputElements);

submitBtn.addEventListener('click', checkBlanks);

function checkBlanks(event, input){
  if (event) {
    event.preventDefault();
  }

  if (input === 'country'){
    if (!country.value.length) {
      let errorMsg = 'Please enter the name of your country';
      displayError('#countryPara', errorMsg);
      return;
    }
  }

  else if (input === 'email'){
    if (!email.value.length) {
      let errorMsg = 'Please enter your email address';
      displayError('#emailPara', errorMsg);
      return;
    }
  }

  else if (input === 'zipCode'){
    if (!zipCode.value.length) {
      let errorMsg = 'Please enter your zip code';
      displayError('#zipCodePara', errorMsg);
      return;
    }
  }

  else if (input === 'password'){
    if (!password.value.length) {
      let errorMsg = 'Please enter your password';
      displayError('#passwordPara', errorMsg);
      return;
    }
  }

  else if (input === 'passwordConfirmation'){
    if (!passwordConfirmation.value.length) {
      let errorMsg = 'Please confirm password entered';
      displayError('#passConfirmPara', errorMsg);
      return;
    }
  }
}

function displayError(paragraph, text){
  const para = document.querySelector(paragraph);
  const divError = document.createElement('div');
  divError.textContent = text;
  para.appendChild(divError);
}

inputElements.forEach((element) => {
  element.addEventListener('blur', validateElement);
})

function validateElement(event) {
  let input = event.target.id;
  switch (input){
    case 'country':
      checkBlanks(event = '', 'country');
      break;

    case 'email':
      checkBlanks(event = '', 'email');
      if (email.validity.typeMismatch) {
        displayError('#emailPara', errorMsg);
      }
      break;

    case 'zipCode':
      checkBlanks(event = '', 'zipCode');
      break;
      
    case 'password':
      checkBlanks(event = '', 'password');
      break;

    case 'passwordConfirmation':
      checkBlanks(event = '', 'passwordConfirmation');
      break;      
  }
}