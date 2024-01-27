function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagemHorario');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `<p>Agora são <strong>${hora} horas</strong>!</p>`;

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/dia.png';
        document.body.style.backgroundColor = '#FED355'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png';
        document.body.style.backgroundColor = '#E99516'
    } else {
        img.src = 'imagens/noite.png';
        document.body.style.backgroundColor = '#3f3f3ff5'
    }
}

/* 

    cor-dia: #FED355;
    cor-tarde: #E99516;
    cor-noite: #002546;

*/