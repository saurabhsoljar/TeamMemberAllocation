// var timer = 60;
// var score = 0;
// var hitrn = 0;



// function increaseScore(){
//     score +=10;
//     document.querySelectorAll("scoreval").textContent = score;
// }
 

// function gatNewHit(){
//      hitrn = Math.floor(Math.random()*10);
//     document.querySelector("#hitval").textContent = hitrn;
// }

// function makeBubble(){
// var clutter = "";

// for (var i = 1; i <= 70; i++) {
//    var rn =  Math.floor(Math.random()*10)
//     clutter += `<div class="bubble">${rn}</div>`;
// }

// document.querySelector("#pbtm").innerHTML = clutter;
// }


// function runTime(){
//         var timerint = setInterval(function(){
//             if(timer > 0){
//             timer--;
//             document.querySelector("#timerval").textContent = timer;
//         }
//         else{
//             clearInterval(timerint);
//             document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
//         }
//     },1000);
    
// }

// document.querySelector("#pbtm").addEventListener("click",
// function(dets){
//     var clickednum = Number(dets.target.textContent);
//     if(clickednum === hitrn){
//         increaseScore();
//         makeBubble();
//         gatNewHit();
//     }
// });

// increaseScore();
// runTime();
// makeBubble();
// gatNewHit();


var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score; // Use #scoreval to select the element
}

function gatNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 70; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",
    function (dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            gatNewHit();
        }
    });


runTime();
makeBubble();
gatNewHit();

 