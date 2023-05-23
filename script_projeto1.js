const body = document.getElementsByClassName('.modo-claro');
const main = document.getElementById('empty');
const alt_tema = document.getElementById('botao-alterar-tema');
const alt_imagem = document.querySelector('.imagem-botao');
const alt_game = document.querySelector('.game');

alt_tema.addEventListener('click', () => {
    let imagem = document.querySelector('body');
    imagem.classList.remove('modo-claro');
    imagem.classList.toggle('modo-escuro');

    if(imagem.classList=='modo-escuro'){
        alt_imagem.setAttribute('src','https://jjunior112.github.io/imagens/sun.png' );
        alt_game.setAttribute('src','https://jjunior112.github.io/imagens/mini-game.png');
    }
    else{
        alt_imagem.setAttribute('src','https://jjunior112.github.io/imagens/moon.png');

        alt_game.setAttribute('src','https://jjunior112.github.io/imagens/mini-game-escuro.png');
    }
   
})

const surgir = document.getElementById('pokebola');
const alt_logo = document.querySelector('.logo');

surgir.addEventListener('click', () =>{
    main.classList.toggle('empty');
    if(main.classList=='empty'){
    alt_logo.setAttribute('src','https://jjunior112.github.io/imagens/pokeball.png' );}
    else{
        alt_logo.setAttribute('src','https://jjunior112.github.io/imagens/pokeball-ativa.png' );
    }
})

