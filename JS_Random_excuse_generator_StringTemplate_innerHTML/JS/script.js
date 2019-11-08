var btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", function () {

    let kas = ["mama", "teta", "šuo"];
    let veiksmas = ["suvalgė", "išmetė", "paslepė", "sudraskė"];
    let ka = ["referatą", "bakalaurinį"];

    let random_kas_index = Math.floor(Math.random() * kas.length);
    let random_veiksmas_index = Math.floor(Math.random() * veiksmas.length);
    let random_ka_index = Math.floor(Math.random() * ka.length);

    let pasiteisinimas = `${kas[random_kas_index]} + ${veiksmas[random_veiksmas_index]} + ${ka[random_ka_index]}`;
    document.getElementById("clicks").innerHTML = pasiteisinimas;

    console.log(`${kas[random_kas_index]} + ${veiksmas[random_veiksmas_index]} + ${ka[random_ka_index]}`);


})