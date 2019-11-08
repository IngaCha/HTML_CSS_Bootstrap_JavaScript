var btn = document.getElementsByClassName("btn")[0];
var btn2 = document.getElementsByClassName("btn")[1];
var btn3 = document.getElementsByClassName("btn")[2];
var btn4 = document.getElementsByClassName("btn")[3];


let counter = 0;
let value = document.getElementById("mySelect");
let usr_input1;

//calculates and shows balance
btn.addEventListener("click", function () {
    event.preventDefault();
    if (value.value === "papildyti") {
        usr_input1 = document.getElementsByTagName("input")[0].value;
        usr_input1 = Number(usr_input1);
        counter += usr_input1;
        document.getElementById("clicks").innerHTML = "Sąskaitoje yra: " + counter + " EUR";

    } else if (value.value === "pasiimti") {
        usr_input1 = document.getElementsByTagName("input")[0].value;
        usr_input1 = Number(usr_input1);
        counter -= usr_input1;
        document.getElementById("clicks").innerHTML = "Sąskaitoje yra: " + counter;
    }

})


//creates transaction list
function Israsas(data, operacija, suma) {
    this.data = data;
    this.operacija = operacija;
    this.suma = suma;
};

var my_obj_array = [];

btn.addEventListener("click", function () {
    event.preventDefault();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    if (value.value === "papildyti") {
        var my_li = document.createElement("li");
        var usr_input1 = document.getElementsByTagName("input")[0].value;
        //console.log(typeof usr_input1);
        var operation = "Papildymas";
        var Irasas = new Israsas(dateTime, operation, usr_input1);
        my_obj_array.push(Irasas);


        let result = dateTime + " Papildymas: " + usr_input1 + "EUR";
        var content = document.createTextNode(result);
        var my_ol = document.getElementById("ol");
        my_li.appendChild(content);
        my_ol.appendChild(my_li);
        my_li.style.color = "green";

    } else if (value.value === "pasiimti") {
        var my_li = document.createElement("li");
        var usr_input1 = document.getElementsByTagName("input")[0].value;
        //console.log(typeof usr_input1);
        var operation = "Paėmimas";
        var Irasas = new Israsas(dateTime, operation, usr_input1);
        my_obj_array.push(Irasas);


        let result = dateTime + " Paėmimas: " + usr_input1 + "EUR";
        var content = document.createTextNode(result);
        var my_ol = document.getElementById("ol");
        my_li.appendChild(content);
        my_ol.appendChild(my_li);
        my_li.style.color = "red";

    }

})



//show all transactions. Shows all transactions sorted by date
btn2.addEventListener("click", function () {
    document.getElementById("ol").style.display = "block";
    event.preventDefault();
    document.getElementById("ol").innerHTML = ""; //clear unsorted ol

    var bysum = my_obj_array.slice(0); //copy array

    bysum.sort(function (a, b) {
        return a.data - b.data;
    });

    console.log('by sum:');
    console.log(bysum);

    for (var i = 0; i < bysum.length; i += 1) {
        var result = bysum[i].data + " " + bysum[i].operacija + " " + bysum[i].suma;
        console.log(result);

        var my_li = document.createElement("li");
        var content = document.createTextNode(result);
        console.log(typeof content);
        var my_ol = document.getElementById("ol");
        my_li.appendChild(content);
        my_ol.appendChild(my_li);
        console.log(bysum[i].operacija);
        if (bysum[i].operacija == "Papildymas") {
            my_li.style.color = "green";
        } else {
            my_li.style.color = "red";
        }

    }


})

//filter by user input amount + show filtered transactions
btn3.addEventListener("click", function () {
    event.preventDefault();
    usr_input_sum = document.getElementsByTagName("input")[1].value;
    document.getElementById("ol").innerHTML = ""; //clear unsorted ol
    var forfilter = my_obj_array.slice(0); //copy array
    var filter_by_sum = forfilter.filter(function (obj) {
        //        var filter_by_sum = my_obj_array.filter(function (obj) {
        return obj.suma === usr_input_sum;
    });
    console.log(filter_by_sum);
    for (var i = 0; i < filter_by_sum.length; i += 1) {
        var result = filter_by_sum[i].data + " " + filter_by_sum[i].operacija + " " + filter_by_sum[i].suma;
        console.log(result);

        var my_li = document.createElement("li");
        var content = document.createTextNode(result);
        console.log(typeof content);
        var my_ol = document.getElementById("ol");
        my_li.appendChild(content);
        my_ol.appendChild(my_li);
        console.log(filter_by_sum[i].operacija);
        if (filter_by_sum[i].operacija == "Papildymas") {
            my_li.style.color = "green";
        } else {
            my_li.style.color = "red";
        }

    }

})



//sort by amount + show sorted transactions
btn4.addEventListener("click", function () {
    event.preventDefault();
    document.getElementById("ol").innerHTML = ""; //clear unsorted ol

    var bysum = my_obj_array.slice(0); //copy array
    bysum.sort(function (a, b) {
        return a.suma - b.suma;
    });
    console.log('by sum:');
    console.log(bysum);

    for (var i = 0; i < bysum.length; i += 1) {
        var result = bysum[i].data + " " + bysum[i].operacija + " " + bysum[i].suma;
        console.log(result);

        var my_li = document.createElement("li");
        var content = document.createTextNode(result);
        console.log(typeof content);
        var my_ol = document.getElementById("ol");
        my_li.appendChild(content);
        my_ol.appendChild(my_li);
        console.log(bysum[i].operacija);
        if (bysum[i].operacija == "Papildymas") {
            my_li.style.color = "green";
        } else {
            my_li.style.color = "red";
        }

    }


})
