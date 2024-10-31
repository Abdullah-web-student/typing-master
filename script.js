let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

function func1() {
    let randomNumber = Math.floor(Math.random() * 26);
    let x = abc[randomNumber];
    let computer = document.querySelector('#cShow');
    computer.textContent = x;
}
const body = document.body;
let h = document.querySelector('.h3')



let user = document.querySelector('#userinp');

// let r_count = 0;
// let w_count = 0;

let correctCount = 0;
let wrongCount = 0;

const correctCounter = document.querySelector(".rt");
const wrongCounter = document.querySelector(".wr");
user.addEventListener('keyup', (e) => {

    if (user.value == h.innerHTML) {
        func1();
        user.value = '';
        correctCount++;
        correctCounter.textContent = correctCount;
        correctCounter.classList.add("show_counters")
        
        
    } else {
        user.value = '';
        wrongCount++;
        wrongCounter.textContent = wrongCount;
        wrongCounter.classList.add("show_counters")
    }
    timer()


});



function res(){
    location.reload();
}

var timer;
var user_timer = document.getElementById('user_timer');

function timer(){
  var sec = 0;
  timer = setInterval(()=>{
    user_timer.innerHTML = '00:'+sec;
    sec ++;
  }, 1000) // each 1 second
}

function pause(){
  clearInterval(timer);
}
// pause();