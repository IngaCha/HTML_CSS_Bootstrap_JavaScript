function Book(title, author, release_year, pages, in_stock, price) {
    this.title = title;
    this.author = author;
    this.release_year = release_year;
    this.pages = pages;
    this.in_stock = in_stock;
    this.price = price;
}

var book1 = new Book("My Sweet Book1", "Inga Cha", 1998, 300, 20, 35);
var book2 = new Book("My Sweet Book2", "Lina Cha", 2000, 250, 0, 60);
var book3 = new Book("My Sweet Book3", "Boo Boo", 2019, 458, 3, 10);

console.log(typeof book1);

var my_array = [book1, book2, book3];
console.log(my_array);


//search by Author
var result1 = my_array.filter(obj => {
    return obj.author === "Boo Boo"
})
console.log(result1);

//search by Title
var result2 = my_array.filter(obj => {
    return obj.title === "My Sweet Book2"
})
console.log(result2);

//search by release year
var result3 = my_array.filter(obj => {
    return obj.release_year === 1998
})
console.log(result3);
