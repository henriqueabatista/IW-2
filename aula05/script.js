//a) Crie uma função que receba dois números e retorne o maior deles.
function maior() {
    let x = prompt("Digite o primeiro número")
    let y = prompt("Digite o segundo número")
    if (x == y){
        alert("Os números são iguais")
    } else if(x < y){
        alert(y + " é maior que " + x)
    } else{
        alert(x + " é maior que " + y)
    }
}
console.log(maior())
//b) Escreva uma função que receba um número e retorne true se ele for par
//e false caso contrário.
function comparacao() {
    let a = prompt("Digite um número")
    if (a == 0) {
        alert("número errado tente novamente")        
    } else if (a%2 == 0) {
        alert(true)
    } else {
        alert(false)
    }
    

}
console.log(comparacao())
//c) Desenvolva uma função que calcule o fatorial de um número.
function fatorial() {
    let n = Number(prompt("Digite um número"));

    if (isNaN(n) || n < 0) {
        alert("Número inválido, tente novamente");
    } else if (n === 0 || n === 1) {
        alert(1);
    } else {
        let resultado = 1;

        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }

        alert(resultado);
    }
}
console.log(fatorial()); 

//d) Crie uma função que receba uma lista de números e retorne a média
//deles.
function media() {
    let entrada = prompt("Digite os números");
    let lista = entrada.split(",");
    let soma = 0;   

    for (let i = 0; i < lista.length; i++) {
        soma += Number(lista[i]);
    }

    let resultado = soma / lista.length;

    alert(resultado);
}
console.log(media());
//e) Implemente uma função que converta uma temperatura de Celsius para
//Fahrenheit. 
function converterTemperatura() {
    let celsius = Number(prompt("Digite a temperatura em Celsius"));

    if (isNaN(celsius)) {
        alert("Valor inválido, tente novamente");
    } else {
        let fahrenheit = (celsius * 9/5) + 32;
        alert("A temperatura em Fahrenheit é: " + fahrenheit);
    }
}
console.log(converterTemperatura());
