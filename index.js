let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");
let stopLight=document.getElementById("stopLight");
let readyLight=document.getElementById("readyLight");
let goLight=document.getElementById("goLight");

function stopClick(){
    stopButton.style.backgroundColor="red";
    stopLight.style.backgroundColor="red";
    readyButton.style.backgroundColor="grey";
    readyLight.style.backgroundColor="grey";
    goButton.style.backgroundColor="grey";
    goLight.style.backgroundColor="grey";

}
readyButton.onclick=function(){
    readyButton.style.backgroundColor="yellow";
    readyLight.style.backgroundColor="yellow";
     goButton.style.backgroundColor="grey";
    goLight.style.backgroundColor="grey";
    stopButton.style.backgroundColor="grey";
    stopLight.style.backgroundColor="grey";
    
}
goButton.addEventListener("click" ,function(){
    goButton.style.backgroundColor="green";
    goLight.style.backgroundColor="green";
    readyButton.style.backgroundColor="grey";
    readyLight.style.backgroundColor="grey";
    stopButton.style.backgroundColor="grey";
    stopLight.style.backgroundColor="grey";
    
    
})
