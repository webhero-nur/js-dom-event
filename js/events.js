// option 1: directly set on the HTML element 
// <button onclick="document.body.style.backgroundColor= 'yellow'">Make Yellow</button>

// option 2: add onclick function on the html element
// IMPORTANT: We will use this 
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3: catch by id and then call the function
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue; // do not call here. just write the function name

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3 (another): catch by id and then directly write the function
// [WE WILL USE THIS SOMETIME]
const makePurpleBtn = document.getElementById('make-purple');
makePurpleBtn.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}

// option 4: addEventListener
const makePinkBtn = document.getElementById('make-pink');
makePinkBtn.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4 (another): directly write the function
const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});


// option 4 (FINAL): without creating any extra variable
// IMPORTANT: We will use this most of the time
// document.getElementById('make-goldenrod').addEventListener('click', function(){});
document.getElementById('make-goldenrod').addEventListener('click', function () { // not necessary to write the function name if no call is required
    document.body.style.backgroundColor = 'goldenrod';
});

