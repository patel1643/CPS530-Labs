const name = document.getElementById('name');
const phone = document.getElementById('phone');

const form = document.getElementById('form');
const error = document.getElementById('errorName');

form.addEventListener('submit', (e)=>{
  let errMessage = []
  var hasNumber = /\d/
  if(hasNumber.test(name.value)){
    errMessage.push('Invalid input please enter a name')
  }
  if(errMessage.length > 0){
    e.preventDefault()
    error.innerText = errMessage.join(', ')
  }
})
