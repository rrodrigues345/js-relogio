function horaCerta() {
    let date = new Date(); //pega a hora --> "2022-02-10T23:36:11.891Z"
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    } 
    // se passar de 12, resete o clock para usar AM/PM
    else if (h > 12) { // para conservar o período de < 12 e usar "PM" 
        h -= 12;
        session = "PM";
    }
    
    // Adicionar um "zero" nos números menores que 10 (para ficar --> 09, 08, 07 ... etc)
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MostraRelogio").innerText = time;
    document.getElementById("MostraRelogio").textContent = time;

    setTimeout(horaCerta, 1000)


}

horaCerta();

// REFS
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date