const body = document.querySelector('body');
const alt_tema = document.getElementById('tema');
const alt_imagem = document.getElementById('tema')

alt_tema.addEventListener('click', () => {

    document.body.classList.toggle('modo-escuro')    
    if(body.classList=='modo-escuro'){
        alt_imagem.setAttribute('src',"CSS/imagens/sun.png");}
    else{
        alt_imagem.setAttribute('src',"CSS/imagens/moon.png");
    }
    })

const hamburger = document.getElementById('hamburger');
const nav_bar = document.getElementById('nav-bar')

hamburger.addEventListener( 'click', () =>{
    nav_bar.classList.toggle('active');
})

const enviar = document.getElementById('enviar');
let check = document.getElementById('confirmar');

check.addEventListener('click', () =>{
    if(check.value=='empty'){
        check.setAttribute('value','checked');}
    else{
        check.setAttribute('value','empty');
    }
})

enviar.addEventListener('click',() =>{
    let check = document.getElementById('confirmar');
    let label = document.getElementById('label')

    if(check.value=='empty'){
        label.style.display='flex';
    }
    else{
        label.style.display='none';
    }
})


let barraCookie = document.getElementById("barra-cookie");
let btnCookie = document.getElementById("btn-cookie");

if (!localStorage.getItem("aceitou-cookie")) {
  barraCookie.style.display = "block";
}

btnCookie.addEventListener("click", function() {
  localStorage.setItem("aceitou-cookie", true);
  barraCookie.style.display = "none";
});

