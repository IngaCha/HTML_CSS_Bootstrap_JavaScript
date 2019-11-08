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


    var result = usr_input1 + usr_input2;
    document.getElementById("clicks").innerHTML = result;

})