var btn1 = document.getElementsByClassName("btn")[0];
var btn2 = document.getElementsByClassName("btn")[1];
var btn3 = document.getElementsByClassName("btn")[2];
var btn4 = document.getElementsByClassName("btn")[3];
var btn5 = document.getElementsByClassName("btn")[4];
var paveikslelis = document.getElementsByTagName("img")[0];
var paveikslelis_hide = document.getElementsByTagName("img")[1];



btn1.addEventListener("click", function () {
    paveikslelis.style.cssFloat = "left";
    if (paveikslelis.style.display = "none") {
        paveikslelis.style.display = "block";
        paveikslelis.style.cssFloat = "left";
        paveikslelis_hide.style.display = "none";
    }
})

btn2.addEventListener("click", function () {
    paveikslelis.style.cssFloat = "right";
    if (paveikslelis.style.display = "none") {
        paveikslelis.style.display = "block";
        paveikslelis.style.cssFloat = "right";
        paveikslelis_hide.style.display = "none";
    }
})

btn3.addEventListener("click", function () {
    paveikslelis.style.display = "none";
    if (paveikslelis_hide.style.display = "block") {
        paveikslelis_hide.style.display = "none"
    }
})

btn4.addEventListener("click", function () {
    paveikslelis.style.display = "none";
    paveikslelis_hide.style.display = "block";
})

btn5.addEventListener("click", function () {
    location.reload();
})