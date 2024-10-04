var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso/(altura*altura);


var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso >= 1000) {
    // console.log("Peso inválido!");
    // tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3) {
    // console.log("Altura inválida!");
    // tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";

}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}


