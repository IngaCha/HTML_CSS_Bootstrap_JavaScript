//let p = document.querySelector("p");
//p.addEventListener("click", red(){
//p.style.color = "red";
//})
//let p = document.querySelector("p");
//p.addEventListener("click", yellow(){
//p.style.color = "yellow";
//})
//let p = document.querySelector("p");
//p.addEventListener("click", green(){
//p.style.color = "green";
//})


function yellow() {
    var p = document.getElementById("top");
    //p.style.color = "yellow";
    //p.setAttribute("class", "yellow");
    p.classList.add("yellow");
}

function green() {
    var p = document.getElementById("top");
    //p.style.color = "green";
    //p.setAttribute("class", "green");
    p.classList.add("green");
}

function red() {
    var p = document.getElementById("top");
    //p.style.color = "red";
    //p.setAttribute("class", "red");
    p.classList.add("red");
}
