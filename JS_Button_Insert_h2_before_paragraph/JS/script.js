var btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", function () {
    let newH2 = document.createElement("h2");
    newH2.textContent = "Pavadinimas";

    let p = document.querySelector("p");

    let parent = document.getElementsByClassName("inserthere")[0];

    parent.insertBefore(newH2, p);

})
