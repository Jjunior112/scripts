const dino = document.querySelector('.dino');
const cacto = document.querySelector('.cacto');
const score = document.querySelector('.score');
const caterpie = document.getElementById('caterpie');
const charizard = document.getElementById('charizard');
const wartorle = document.getElementById('wartortle');
const pikachu = document.getElementById('pikachu');
const blastoise = document.getElementById('blastoise');
const squirtle = document.getElementById('squirtle');

let alreadyJump = false;
let count = 0;

caterpie.addEventListener('click', () =>{
    dino.style.backgroundImage = 'url(caterpie.gif)'
    dino.style.height = '190px'
    dino.style.widht = '180px'
});
charizard.addEventListener('click', () =>{
    dino.style.backgroundImage = 'url(charizard.gif)'
    dino.style.height = '185px'
    dino.style.widht = '190px'
});
wartorle.addEventListener('click', () =>{
    dino.style.backgroundImage = 'url(wartortle.gif)'
    dino.style.height = '170px'
    dino.style.widht = '190px'
});
pikachu.addEventListener('click', () =>{
    dino.style.backgroundImage = 'url(pikachu.gif)'
    dino.style.height = '145px'
    dino.style.widht = '185px'
});
blastoise.addEventListener('click', () =>{
    dino.style.backgroundImage = 'url(blastoise.gif)'
    dino.style.height = '165px'
    dino.style.widht = '190px'
});
squirtle.addEventListener('click', () =>{
    dino.style.backgroundImage = 'url(squirtle.gif)'
    dino.style.height = '195px'
    dino.style.widht = '190px'
});



// Adicionar ouvinte de evento para o evento touchstart
document.addEventListener('touchstart', function(event) {
    event.preventDefault();
    
    // Lógica para o toque na tela
    jump();
  });

document.addEventListener('keydown', (e) =>{
    if ((e.code=== 'ArrowUp')|(e.code === 'Space')){
        jump();
    }
});
function jump(){
    if(!dino.classList.contains('jump')){
        dino.classList.add('jump');
        alreadyJump = true;
    }
        setTimeout(() =>{
            dino.classList.remove('jump');
            alreadyJump = false;
        }, 1100)
}

setInterval(()=>{
    let dinoBottom = parseInt(
        window.getComputedStyle(dino).getPropertyValue('bottom')
    );
    let cactoLeft = parseInt(
        window.getComputedStyle(cacto).getPropertyValue('left')
    );
    if(window.innerWidth>=800){
        if (cactoLeft > 30 && cactoLeft < 190 && dinoBottom <= 30 && !alreadyJump){
            alert(`Game Over! seu score foi ${count}`);
            count = 0;
        } 
    }
    if(window.innerWidth<800){
        if (cactoLeft > 25 && cactoLeft < 100 && dinoBottom <= 25 && !alreadyJump){
            alert(`Game Over! seu score foi ${count}`);
            count = 0;
        } 
    
    }
    if(window.innerWidth<=430){
        if (cactoLeft > 15 && cactoLeft < 70 && dinoBottom <= 15 && !alreadyJump){
            alert(`Game Over! seu score foi ${count}`);
            count = 0;
        } 
    
    }
    count++;
    score.innerHTML = `SCORE: ${count}`;
    }, 10);

const chg_tema = document.getElementById('botao-alterar-tema');
const chg_imagem = document.querySelector('.imagem-botao');
    
    chg_tema.addEventListener('click', () => {
        let imagem1 = document.querySelector('body');
        imagem1.classList.remove('light-mode');
        imagem1.classList.toggle('modo-escuro');
    
        if(imagem1.classList=='modo-escuro'){
            chg_imagem.setAttribute('src','https://jjunior112.github.io/Portfolio_dev/sun.png' );
        }
        else{
            chg_imagem.setAttribute('src','https://jjunior112.github.io/Portfolio_dev/moon.png');
        }
       
    })