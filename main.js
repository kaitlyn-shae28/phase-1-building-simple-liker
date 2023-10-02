// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartButtons = document.querySelectorAll('.like');

heartButtons.forEach(heartButton => {
  heartButton.addEventListener('click', () => {
    const isHearted = heartButton.classList.contains('activated-heart');
    mimicServerCall()
      .then(() => {
        if (isHearted) {
          heartButton.innerHTML = EMPTY_HEART;
          heartButton.classList.remove('activated-heart');
        } else {
          heartButton.innerHTML = FULL_HEART;
          heartButton.classList.add('activated-heart');
        }
      })
      .catch(() => {
        const error = document.getElementById('modal');
        const errorMessage = document.getElementById('modal-message');
        errorMessage.textContent = "Error, please try again.";
        error.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      })
    })      
})
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}