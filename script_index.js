const botaoResumo = document.getElementById('botao-resumo')
const resumo = document.getElementById('resumo');
const body = document.querySelector('body')

botaoResumo.addEventListener('click',() =>{
    resumo.classList.toggle('resumoActive');
})

const altTema = document.getElementById('botao-tema');

altTema.addEventListener('click', () =>{
    body.classList.toggle('modo-claro');

    if(body.classList=='modo-claro'){
        altTema.setAttribute('src','css/imagens/moon.png')
    }
    else{
        altTema.setAttribute('src','css/imagens/sun.png')
    }
})