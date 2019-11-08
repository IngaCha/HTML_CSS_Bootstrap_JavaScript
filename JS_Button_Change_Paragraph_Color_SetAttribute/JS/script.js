var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var p = document.querySelector("p");

btn1.addEventListener("click", function () {
    p.setAttribute("class", "yellow")
    //p.style.color = "yellow"
})

btn2.addEventListener("click", function () {
    p.setAttribute("class", "green")
    //p.style.color = "green"
})

btn3.addEventListener("click", function () {
    p.setAttribute("class", "red")
    //p.style.color = "red"
})
