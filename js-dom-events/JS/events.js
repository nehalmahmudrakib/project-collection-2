console.log ('This is separate JS')

// Option: 2 --> add clicks on button
function makeRed (){
    document.body.style.backgroundColor = 'red'
}

// Option: 3 
const makeBlueButton = document.getElementById ('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue (){
    document.body.style.backgroundColor = 'blue';
}

// Option: 4
const makePurple = document.getElementById ('make-purple')
        makePurple.addEventListener('click', purpleButton);
        function purpleButton(){
            document.body.style.backgroundColor = 'purple'
        }

// Option : 4 --> Optional
const makeGreen = document.getElementById ('make-green')
        makeGreen.addEventListener ('click', function green(){
            document.body.style.backgroundColor = 'green'
        })

// Option: 4 --> Final
document.getElementById ('make-orange').addEventListener ('click', function (){
    document.body.style.backgroundColor = 'orange'
})