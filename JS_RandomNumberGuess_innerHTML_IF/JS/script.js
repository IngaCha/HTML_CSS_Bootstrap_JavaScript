var random_number = Math.floor((Math.random() * 10) + 1);
console.log(typeof random_number);
console.log("Random: " + random_number);
var btn = document.getElementsByClassName("btn")[0];
var clicks = 0;


btn.addEventListener("click", function () {
    event.preventDefault();

    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    var usr_input = document.getElementsByTagName("input")[0].value;
    console.log(typeof usr_input); //string
    console.log(usr_input);
    usr_input = Number(usr_input);
    console.log(typeof usr_input); //number
    console.log(usr_input);

    if (usr_input === random_number) {
        alert("You guessed it! It was: " + random_number);
        location.reload();
    } else if (usr_input < random_number) {
        alert("Sorry, your number is SMALLER than the number we have in mind... Try again!");
    } else {
        alert("Sorry, your number is BIGGER than the number we have in mind... Try again!");
    }


})
