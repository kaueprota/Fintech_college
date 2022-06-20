

var botao = document.querySelectorAll("i")[1];
botao.addEventListener('click', HiddenMenu);
//botao.style.width = 100;
//botao.style.color = "red";


function HiddenMenu(){
    let navMobi = document.getElementById("nav-mobi");
    navMobi.classList.toggle("nav-mob-hidden");
}

var botao2 = document.querySelectorAll("i")[0];
botao2.addEventListener('click', HiddenMenu);

