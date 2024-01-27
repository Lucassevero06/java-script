function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são <strong>${hora} horas</strong>!</p>`;

    if (hora >= 0 && hora < 12) {
        img.src = 'dia.jpg';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg';
    } else {
        img.src = 'noite.jpg';
    }
}