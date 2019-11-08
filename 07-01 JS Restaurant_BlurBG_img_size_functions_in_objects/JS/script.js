var my_restaurant = {
    name: "Ingos restoranas",
    totalTables: 20,
    reserved: 0,
    hasFreeTable: function () {
        return this.reserved < this.totalTables;
    },
    reserveTable: function () {
        if (this.hasFreeTable()) {
            this.reserved += 1;
            return true;
        } else {
            return false;
        }
    },
    cancelTable: function () {
        if (this.reserved > 0) {
            this.reserved -= 1;
            return true;
        } else {
            return false;
        }
    },
    vacancies: function () {
        return this.totalTables - this.reserved;
    }

};

var btn1 = document.getElementsByClassName("btn")[0];
console.log(btn1);
btn1.addEventListener("click", function () {
    event.preventDefault();
    if (!my_restaurant.reserveTable()) {
        alert("Atsiprašome, visi staliukai rezervuoti...")
    }
    document.getElementById("clicks").innerHTML = my_restaurant.vacancies();
    document.getElementById("clicks2").innerHTML = my_restaurant.reserved;

})

var btn2 = document.getElementsByClassName("btn")[1];
console.log(btn2);
btn2.addEventListener("click", function () {
    event.preventDefault();
    if (!my_restaurant.cancelTable()) {
        alert("Visi staliukai laisvi, nėra ką atšaukti :)")
    }
    document.getElementById("clicks2").innerHTML = my_restaurant.reserved;
    document.getElementById("clicks").innerHTML = my_restaurant.vacancies();

})