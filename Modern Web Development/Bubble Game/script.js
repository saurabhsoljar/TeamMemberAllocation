var timer = 3;

function gatNewHit(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function makeBubble(){
var clutter = "";

for (var i = 1; i <= 70; i++) {
   var rn =  Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTime(){
        var timerint = setInterval(function(){
            if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
        }
    },1000);
    
}

runTime();
makeBubble();
gatNewHit();
