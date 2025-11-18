function ligar() {
    document.getElementById('lampa').src='img/pic_bulbon.png';
}
function desligar() {
    document.getElementById('lampa').src='img/pic_bulboff.png';
}
function onOff() {
    let imagem = document.getElementById('lampad').src;

    if (imagem.includes('img/pic_bulboff.png') ) {
        document.getElementById('lampad').src='img/pic_bulbon.png';
    }
    else {    
        document.getElementById('lampad').src='img/pic_bulboff.png';
    }    
}
