const body = document.querySelector('body');

const IMG_NUMBER = 5;

function paintImange(imgNuber){
    const image = new Image();
    image.src = `./images/${imgNuber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number
}


function init(){
    const randomNumber = genRandom();
    paintImange(randomNumber)
}

init()