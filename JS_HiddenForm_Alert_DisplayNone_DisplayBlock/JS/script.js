var btn = document.getElementsByClassName("btn")[0];
var forma = document.getElementsByTagName("form")[0];
btn.addEventListener("click", function () {
    forma.style.display = "block";
})

var btn2 = document.getElementsByClassName("btn")[1];
btn2.addEventListener("click", function () {
    alert("Thanks for your opinion!");
})