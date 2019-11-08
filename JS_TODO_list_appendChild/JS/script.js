var btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", function () {
    event.preventDefault();

    var my_li = document.createElement("li");
    var usr_input1 = document.getElementsByTagName("input")[0].value;
    var content = document.createTextNode(usr_input1);
    var my_ul = document.getElementById("ul");
    my_li.appendChild(content);
    my_ul.appendChild(my_li);



})