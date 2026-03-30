//1. Par ou Ímpar
//Peça um número ao usuário e exiba se ele é par ou ímpar.
console.log("Exercicio 1");
var n = prompt("digite um numero para ver se é par ou impar: ");
if (n % 2 == 0){
    console.log("seu numero é par");
}else{
    console.log("seu numero é impar");
}
//2. Verificação de Maioridade
//Solicite a idade do usuário e informe se ele é maior de idade (18 anos ou mais) ou menor de idade.
console.log("Exercicio 2");
var id = prompt("digite sua idade:");
if (id >=18){
    console.log("você é maior de idade");
}else{
    console.log("você é menor de idade");
}
//3. Contagem de 1 a 10
//Exiba os números de 1 a 10 no console usando um laço for.
console.log("Exercicio 3");
for(var i = 1; i<11;i++){
    console.log(i)
}
//4. Contagem Regressiva
//Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um while.
console.log("Exercicio 4");
i = prompt("digite um numero: ");
while (i > -1){
    console.log(i);
    i--;
}
//5. Tabuada
//Peça um número e exiba a tabuada de 1 a 10 usando um laço for.
console.log("Exercicio 5");
i = prompt("digite um numero para ser multiplicado de 1 a 10: ");
for(var m = 1; m<11;m++){
    mult = i * m;
    console.log(mult);
}
//6. Somatório
//Solicite um número e some todos os números de 1 até ele
console.log("Exercicio 6");
num = parseInt(prompt("digite um numero para ser somado: "));
num = num + 1;
for(var s = 1; s<num; s++){
    soma = 0 + s;
    console.log(soma);
}
//7. Número Primo
//Peça um número ao usuário e informe se ele é primo ou não.
console.log("Exercicio 7");
num = parseInt(prompt("digite um numero para ver se é primo: "));
var primo = true;
if (num <= 1) {
    primo = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        primo = false;
        break;
      }
    }
  }
  
  if (primo) {
    console.log("O número é primo.");
  } else {
    console.log("O número não é primo.");
  }
//8. Login Simples
//Peça ao usuário um nome de usuário e uma senha. Se ele errar, peça novamente até acertar.
console.log("Exercicio 8");
var usuario = prompt("digite um nome de usuario: ");
var senha = parseInt(prompt("digite uma senha: "));
while(true){
    var entrada1 = prompt("digite o nome do seu usuario: ");
    var entrada2 = parseInt(prompt("digite sua senha: "));
    if ((entrada1 == usuario) && (entrada2 == senha)){
        console.log("você logou");
        break
    } else{
        console.log("tente novamente")
    }
}
//9.Soma de Números Positivos
//Peça ao usuário vários números e some-os até que ele digite um número negativo,então exiba o total.
console.log("Exercicio 9");
var soma = 0;
while(true){
    var number = parseFloat(prompt("digite o numero para ser somado: "));   
    if (number <0){
        console.log("a soma do numeros digitado é de: " + soma);
        break
    }else{
        soma = soma + number;
    }
}
//10.Adivinhação
//Escolha um número aleatório de 1 a 10 e peça ao usuário para adivinhar.Dê dicas até ele acertar.
console.log("Exercico 10");
var alt = Math.floor(Math.random() * 10);
var palpite;
while(true){
    palpite = parseInt(prompt("Adivinhe o número:"));
    if (palpite == alt){
        console.log("PARABÉNS VOCÊ ACERTOU O NÚMERO")
        break
    }else if(palpite < alt){
        alert("O número é MAIOR!");
    } 
    else{
        alert("O número é MENOR!");
    }
}
//11.Cálculo de Fatorial
//Peça um número e exiba seu fatorial(n!).
console.log("Exercico 11");
var numero = parseInt(prompt("Digite um número:"));
if (numero < 0){
    console.log("Fatorial não existe para números negativos.");
} else {
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    }
    console.log("O fatorial de " + numero + " é: " + fatorial);

//12.Validação de Nota
// Peça uma nota de 0 a 10 e continue pedindo até que o usuário insira um valor válido.
console.log("Exercicio 12");

var nota;

while (true) {
    nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));

    if (nota >= 0 && nota <= 10) {
        console.log("Nota válida: " + nota);
        break;
    } else {
        console.log("Valor inválido, tente novamente.");
    }
}
//13.Média de Notas
// Peça 3 notas ao usuário, calcule e exiba sua média.Informe se ele foi aprovado(média≥7)ou reprovado
console.log("Exercicio 13");

var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

console.log("Média: " + media.toFixed(2));

if (media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}
//14.Caixa Eletrônico
// Peça um valor ao usuário e informe as possíveis cédulas para saque(100, 50,20,10,5,2,1).
console.log("Exercicio 14");

var valor = parseInt(prompt("Digite o valor para saque:"));

var notas100 = Math.floor(valor / 100);
valor %= 100;

var notas50 = Math.floor(valor / 50);
valor %= 50;

var notas20 = Math.floor(valor / 20);
valor %= 20;

var notas10 = Math.floor(valor / 10);
valor %= 10;

var notas5 = Math.floor(valor / 5);
valor %= 5;

var notas2 = Math.floor(valor / 2);
valor %= 2;

var notas1 = valor;

console.log("Notas de 100: " + notas100);
console.log("Notas de 50: " + notas50);
console.log("Notas de 20: " + notas20);
console.log("Notas de 10: " + notas10);
console.log("Notas de 5: " + notas5);
console.log("Notas de 2: " + notas2);
console.log("Notas de 1: " + notas1);

//15.
// Números Ímpares
// Peça um número ao usuário e exiba todos os números ímpares de 1 até esse número.
console.log("Exercicio 15");

var num = parseInt(prompt("Digite um número:"));

for (var i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}