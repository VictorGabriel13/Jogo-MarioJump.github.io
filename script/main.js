const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audio = document.getElementById('audio');

const jump = (event) => {
    if (event.code === 'Space') {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
    console.log(marioPosition)

    if(pipePosition <= 120 && pipePosition >0  && marioPosition <80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        audio.src = 'audio/Mario-game-over-song.mp3'
        audio.removeAttribute('loop');

        clearInterval(loop)

    }

}, 10);

document.addEventListener('keydown', jump);

window.alert('Para pular ultilize a tecla Tab e para reiniciar o jogo reiniciei a sua página de navegação')