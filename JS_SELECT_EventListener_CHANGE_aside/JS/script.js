var value = document.getElementById("mySelect");

value.addEventListener("change", function () {
    var block = document.getElementsByTagName("aside")[0];
    event.preventDefault();
    if (value.value === "spring") {
        block.style.backgroundImage = "url('../IMG/mountain_spring.jpg')";
        block.style.backgroundSize = "800px 800px";
    } else if (value.value === "lake") {
        block.style.backgroundImage = "url('../IMG/mountain_lake.jpg')";
        block.style.backgroundSize = "800px 800px";
    } else if (value.value === "winter") {
        block.style.backgroundImage = "url('../IMG/mountain_winter.jpg')";
        block.style.backgroundSize = "800px 800px";
    } else {
        block.style.backgroundImage = "";
    }


})