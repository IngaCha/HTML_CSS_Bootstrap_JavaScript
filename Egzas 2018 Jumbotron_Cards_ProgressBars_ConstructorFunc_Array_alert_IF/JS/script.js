function FlyInfo(email, code, from, to) {
    this.email = email;
    this.code = code;
    this.from = from;
    this.to = to
}

var flight1 = new FlyInfo("ingamaciunaite@gmail.com", 123456, "Vilnius", "Ryga");
var flight2 = new FlyInfo("andrius.chamentauskas@gmail.com", 654321, "Barcelona", "Vilnius");
var flight3 = new FlyInfo("booboo@gmail.com", 789456, "Talin", "Bergen");


var my_array = [];
my_array.push(flight1, flight2, flight3);
console.log(my_array);

//search by email
var result1 = my_array.filter(obj => {
    return obj.email === "ingamaciunaite@gmail.com";
})
console.log(result1);


//search by code
var result2 = my_array.filter(obj => {
    return obj.code === 789456
})
console.log(result2);


var btn1 = document.getElementsByClassName("btn-js")[0];
console.log(btn1);

btn1.addEventListener("click", function () {
    event.preventDefault();
    usr_email = document.getElementsByTagName("input")[0].value;
    console.log(typeof usr_email); //string
    usr_code = document.getElementsByTagName("input")[1].value;
    usr_code = Number(usr_code);
    console.log(typeof usr_code); //number
    let obj1 = (my_array.find(o => o.email === usr_email))
    let obj2 = (my_array.find(o => o.code === usr_code));

    if ((typeof obj1 === "undefined") || (typeof obj2 === "undefined")) {
        alert("Please check your email or registration code");
    } else if (obj1 === obj2) {
        alert(obj1.from + " " + "✈" + " " + obj1.to);
    } else {
        alert("Please check your email or registration code");
    }

})
