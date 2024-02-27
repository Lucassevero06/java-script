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