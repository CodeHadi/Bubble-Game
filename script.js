var timmer = 60;
var score = 0;
hitrn = 0;

function increaseScore (){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewhit (){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function runtimmer(){
    let timmerval = setInterval(()=>{
        if(timmer > 0){
            timmer --;
            document.querySelector("#setval").textContent = timmer;
        }
        else{
                clearInterval(timmerval)
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`
        }

    },1000);
}

function MakeBubble(){
    var culter = "";

for(var i =1; i <=114; i++){
    var rn = Math.floor(Math.random()*10)
     culter += `<div class="Bullble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = culter;
}

document.querySelector("#pbtm").addEventListener("click" ,
function(dets){
  var clickednum = Number(dets.target.textContent);
  if(clickednum === hitrn){
    increaseScore();
    MakeBubble();
    getNewhit();
  }
});

runtimmer();
MakeBubble();
getNewhit();    
increaseScore();