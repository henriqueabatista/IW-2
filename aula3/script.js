//Exiba uma mensagem de boas-vindas ao usuário utilizando alert.
alert("Boas-Vindas");
//Pergunte ao usuário seu nome usando prompt e exiba um alerta com a resposta.
let nome = prompt("qual é o seu nome:");
alert ("olá,"+nome+"!");
//Pergunte ao usuário sua idade usando prompt e exiba no console se ele é maior ou menor de idade.
let idade = prompt("qual é a sua idade:");
if (idade < 18) {
    alert("Você é menor de idade");
} else {
    alert("vc é maior de idade")
}
//Crie um confirm perguntando se o usuário deseja prosseguir e mostre uma mensagem de acordo com a resposta
let resposta = confirm("Você deseja continuar");
if (resposta) {
    alert("Você escolheu continuar.");
} else {
    alert("Você cancelou a ação")
}
//Declare duas variáveis numéricas com let e peça ao usuário dois números via prompt, depois exiba a soma.
let n1 = prompt("declare o numero 1:");
let n2 = prompt("declare o numero 2:");
let soma = parseFloat(n1) + parseFloat(n2);
alert("a soma do numeros é de: "+ soma+ "!" );
//Peça ao usuário para digitar um número e exiba o dobro dele usando alert.
let num = prompt("digite um numero pra duplicar: ");
let mult = parseFloat(num)*2;
alert("o seu numero multiplicado por 2 igual á: " + mult + "!");
//Crie um script que pergunte o nome e a idade do usuário e exiba uma mensagem personalizada com as informações fornecidas.
let nom = prompt("qual é o seu nome:");
let id = prompt("qual é a sua idade:");
alert ("olá, "+ nom + ", então você tem," + id + " pra poder trabalhar.");