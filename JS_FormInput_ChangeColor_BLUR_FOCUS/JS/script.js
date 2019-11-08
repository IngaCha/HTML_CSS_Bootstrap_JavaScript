var field1 = document.getElementsByClassName("form-control")[0];
var field2 = document.getElementsByClassName("form-control")[1];

field1.addEventListener('focus', function () {
    event.preventDefault();
    field1.style.backgroundColor = 'pink';
})

field1.addEventListener('blur', function () {
    event.preventDefault();
    field1.style.backgroundColor = '';
})

field2.addEventListener('focus', function () {
    event.preventDefault();

    field2.style.backgroundColor = 'blue';
})

field2.addEventListener('blur', function () {
    event.preventDefault();

    field2.style.backgroundColor = '';
})