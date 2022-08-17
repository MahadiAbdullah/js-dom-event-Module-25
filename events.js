console.log('this is separate  JS file')
// option -2 onclick handler

// IMPORTANT: we will use this

// <button onclick="makeRed()">Make Red </button>

function makeRed() {
  document.body.style.backgroundColor = 'red';
}
// option -3 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}
// option - 3 another [we will use this sometimes]
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
  // console.log(purpleButton);
  document.body.style.backgroundColor = 'purple';
}

// option - 4 

const pinkButton = document.getElementById('make-pink');
//   console.log(pinkButton);
pinkButton.addEventListener('click', makePink);
function makePink() {
  document.body.style.backgroundColor = 'pink';
}

// option - 4 another

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
  document.body.style.backgroundColor = 'green';
});

// option - 4 final every time use it.

// IMPORTENT: we will use this sometimes 

 // document.getElementById('make-goldenrod').addEventListener('click', function(){});
 document.getElementById('make-goldenrod').addEventListener('click', function () {
  document.body.style.backgroundColor = 'goldenrod';
})
