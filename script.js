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
    return;
  }
  if (!email.value.length) {
    return;
  }
  if (!zipCode.value.length) {
    return;
  }
  if (!password.value.length) {
    return;
  }
  if (!passwordConfirmation.value.length) {
    return;
  }

}
