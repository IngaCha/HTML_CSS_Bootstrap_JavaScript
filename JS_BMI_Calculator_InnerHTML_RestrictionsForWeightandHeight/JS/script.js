var btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", function () {
    event.preventDefault();

    var usr_input1 = document.getElementsByTagName("input")[0].value;
    usr_input1 = Number(usr_input1);
    console.log(typeof usr_input1);
    console.log(usr_input1);

    var usr_input2 = document.getElementsByTagName("input")[1].value;
    usr_input2 = Number(usr_input2);
    console.log(typeof usr_input2);
    console.log(usr_input2);

    if ((usr_input1 > 9 && usr_input1 < 301) && (usr_input2 > 4 && usr_input2 < 1001)) {
        var result = usr_input2 / Math.pow(usr_input1 / 100, 2);
        result = result.toFixed(2);
        document.getElementById("clicks").innerHTML = result;
    } else {
        document.getElementById("clicks").innerHTML = "Invalid input. Height should be 10-300cm; weight 5-1000kg";

    }


})