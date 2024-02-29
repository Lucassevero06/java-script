/*
var nome, sobrenome, nomeCompleto, idade, soma;
nome="Dimitri";
sobrenome="Teixeira";
idade=30;
nomeCompleto=nome+" "+sobrenome;

soma=idade+10
pessoa=nome+" "+soma;

document.getElementById("texto").innerHTML=pessoa;
*/
//////////////////////////////////////////////////////////////////////////////////////////////
/*
function soma(valor1, valor2) {
    return valor1 + valor2;
};

function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
};

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal,cotacao);

alert("O valor em Real é R$: "+valorReal+" o valor em dólar é US: "+total);
*/

/*
function alertHello(){
    alert("Coé mano véio!")
};

alertHello();
*/

/*
function paraCelcius(valorF){
    return (5/9) * (valorF-32);
};

var x = paraCelcius(50);

alert("A temperatura é de "+x+" graus Celcius.");
*/

/*
function minhaFuncao(){
    var x = 2;
};
*/

/*
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: "2015",
    placa: "ABC-1234",
    buzina: function() {
        alert("biiiiiiiiiiiiiiii")
    },
    completo: function() {
        return "A marca é: "+this.marca+" e o modelo é: "+this.modelo
    }
};

console.log(carro.completo());
*/

/*
function eventoClick(){
    document.body.style.backgroundColor = "red";
}

function eventoDbClick(){
    document.body.style.backgroundColor = "blue";
}

function dentro(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function fora(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "black";
}

 function texto(){
     let p = document.getElementById("texto");
     p.append('o mouse moveu<br>');
}

function segurou(){
    alert("Hello World");
}

function focou() {
    let input = document.getElementById("input");
    input.style.backgroundColor = "red";
    input.style.color = "white";
}

function limparTexto(){
    let input = document.getElementById("input");
    document.getElementById("input").value = "";
}

function mudou() {
    console.log("mudou")
}

function teclaPressionada(){
    let input = document.getElementById("input").value;
    console.log(input);
}
*/

// const lista = [];
// lista[0] = "arroz";
// lista[1] = "feijão";
// lista[2] = "macarrão";

// const pessoa = ["Dimitri", "Teixeira", 30]; //Array

// pessoa.push("Brasileiro"); /* o metodo push(), adiciona mais um item no fim do Array */

// console.log(pessoa.length); /* assim diz quantos itens tem dentro do array. */

// console.log(Array.isArray(pessoa));