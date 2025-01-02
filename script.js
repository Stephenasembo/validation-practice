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

function displayError(paragraph, text){
  const para = document.querySelector(paragraph);
  const divError = document.createElement('div');
  divError.textContent = text;
  para.appendChild(divError);
}

inputElements.forEach((element) => {
  element.addEventListener('blur', validateElement);
})

let userPassword = null;
function validateElement(event) {
  let input = event.target.id;
  switch (input){
    case 'country':
      checkBlanks(event = '', 'country');
      break;

    case 'email':
      checkBlanks(event = '', 'email');
      if (email.validity.typeMismatch) {
        let errorMsg = 'Invalid email format. Example: john@gmail.com'
        displayError('#emailPara', errorMsg);
      }
      break;

    case 'zipCode':
      checkBlanks(event = '', 'zipCode');
      break;
      
    case 'password':
      checkBlanks(event = '', 'password');
      userPassword = password.value;
      break;

    case 'passwordConfirmation':
      let blank = checkBlanks(event = '', 'passwordConfirmation');
      if (!blank) {
        if (userPassword) {
          if (userPassword === passwordConfirmation.value){
            console.log(`It's a match`)
          } else {
            let errorMsg = `Passwords don't match`;
            displayError('#passConfirmPara', errorMsg);
          }
        } else {
          let errorMsg = 'Please enter your password first'
          displayError('#passConfirmPara', errorMsg);
        }
      }
      break;      
  }
}