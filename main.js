// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const hearts = document.querySelectorAll("li span");


for (let heart of hearts){
  heart.addEventListener("click", (e) => {
    // e.preventDefault();
    e.target.child
    

    mimicServerCall()
    .then( (response) => {
      if (e.target.innerText === EMPTY_HEART) {
      e.target.innerText = FULL_HEART;
      e.target.className = "activated-heart"
      }
      // else{
      //   e.target.innerText === EMPTY_HEART;
      //   e.target.className = "";
      // }

    })
    .catch((error) => {
      const modalError = document.getElementById("modal")   //added the class .hidden in html
      modalError.className = "";
      modalError.innerText = error
      setTimeout(() => modalError.className = "hidden", 3000);
    })

  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
