let inputs = document.querySelectorAll(".input")
let enviar = document.querySelector("#btn")
console.log(inputs, enviar)
function validar() {
    if (inputs.values.length === 0) {
        // problema não resolvido
        alert("[ERROR] todos os campos são OBRIGATÓRIOS")
    }
}