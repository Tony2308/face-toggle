//declaring variables to be used herein

let lockUnlock = document.getElementById('lockUnlock');
const date = new Date();
let speechDate = date.getDate();
let label = document.getElementById('label');
let input = document.querySelector('#guess');



//cupture date entered by the user as integer
let predictDay = +prompt('Guess Cessation Date:');
// let predictDay = +document.querySelector('#guess').value;
// let predictDay = document.getElementById('guess').value;

// let correctDate = parseInt(predictDay);
 // let predictDay = +document.getElementById('guessDate').value;

function lockDown(){
    lockUnlock.addEventListener( 'click', ()=> {
        
        if( speechDate === predictDay ){
           
            input.style.display ='none';
            label.innerHTML = 'We are free to roam!!!!'
            lockUnlock.innerHTML = 'Lock';
            lockUnlock.style.backgroundColor = 'crimson';
            let face = document.getElementById('face').src = 'img/happy.png';

        } else{
            label.innerHTML = 'Refresh and guess another date'
            lockUnlock.style.backgroundColor = 'teal';
            let face = document.getElementById('face').src = 'img/sad.png';
            lockUnlock.innerHTML = 'Unlock';
        }

    });

}

lockDown();
