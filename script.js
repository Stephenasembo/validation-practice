const country = document.querySelector('#country');
const email = document.querySelector('#email');
const zipCode = document.querySelector('#zipCode');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', checkBlanks);

function checkBlanks(event){
  event.preventDefault();
  if (!country.value.length) {
    let errorMsg = 'Please enter the name of your country';
    displayError('#countryPara', errorMsg);
    return;
  }
  if (!email.value.length) {
    let errorMsg = 'Please enter your email address';
    displayError('#emailPara', errorMsg);
    return;
  }
  if (!zipCode.value.length) {
    let errorMsg = 'Please enter your zip code';
    displayError('#zipCodePara', errorMsg);
    return;
  }
  if (!password.value.length) {
    let errorMsg = 'Please enter your password';
    displayError('#cpasswordPara', errorMsg);
    return;
  }
  if (!passwordConfirmation.value.length) {
    let errorMsg = 'Please confirm password entered';
    displayError('#passConfirmPara', errorMsg);
    return;
  }

}

function displayError(paragraph, text){
  const para = document.querySelector(paragraph);
  const divError = document.createElement('div');
  divError.textContent = text;
  para.appendChild(divError);
}