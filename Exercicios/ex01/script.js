function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagemHorario');
    var data = new Date();
    //var hora = data.getHours();
    var hora = 24
    msg.innerHTML = `<p>Agora são <strong>${hora} horas</strong>!</p>`;

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/dia.png';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png';
    } else {
        img.src = 'imagens/noite.png';
    }
}

/* 

    cor-dia: #FED355;
    cor-tarde: #E99516;
    cor-noite: #002546;

*/