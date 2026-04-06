/**
* Template Name: Blogy
* Template URL: https://bootstrapmade.com/blogy-bootstrap-blog-template/
* Updated: Feb 22 2025 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

})();

//1. Par ou Ímpar
//Peça um número ao usuário e exiba se ele é par ou ímpar. 
function ex1() {
var n = parseFloat(prompt("digite um numero para ver se é par ou impar: "));
if (n % 2 == 0){
    alert("Seu número é par");
} else{
  alert("Seu número é impar");
}
}

//2. Verificação de Maioridade
//Solicite a idade do usuário e informe se ele é maior de idade (18 anos ou mais) ou menor de idade.
function ex2(){
    var id = prompt("digite sua idade:");
if (id >=18){
    alert("você é maior de idade");
}else{
    alert("você é menor de idade");
}
}

//3. Contagem de 1 a 10
//Exiba os números de 1 a 10 no console usando um laço for.
function ex3(){
    for(var i = 1; i<11;i++){
    alert(i)
}
}
//4. Contagem Regressiva
//Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um while.
function ex4(){
    i = prompt("digite um numero: ");
while (i > -1){
    alert(i);
    i--;
}
}

//5. Tabuada
//Peça um número e exiba a tabuada de 1 a 10 usando um laço for.
function ex5(){
    i = prompt("digite um numero para ser multiplicado de 1 a 10: ");
for(var m = 1; m<11;m++){
    mult = i * m;
    alert(i + " vezes "+m +" é igual a " + mult);
}
}

//6. Somatório
//Solicite um número e some todos os números de 1 até ele
function ex6(){
    num = parseInt(prompt("digite um numero para ser somado: "));
num = num + 1;
for(var s = 1; s<num; s++){
    soma = 0 + s;
    alert(soma);
}
}
//7. Número Primo
//Peça um número ao usuário e informe se ele é primo ou não.
function ex7(){
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
    alert("O número é primo.");
  } else {
    alert("O número não é primo.");
  }
}

//8. Login Simples
//Peça ao usuário um nome de usuário e uma senha. Se ele errar, peça novamente até acertar.
function ex8(){
    var usuario = prompt("digite um nome de usuario: ");
var senha = parseInt(prompt("digite uma senha: "));
while(true){
    var entrada1 = prompt("digite o nome do seu usuario: ");
    var entrada2 = parseInt(prompt("digite sua senha: "));
    if ((entrada1 == usuario) && (entrada2 == senha)){
        alert("você logou");
        break
    } else{
        alert("tente novamente")
    }
}
}

//9.Soma de Números Positivos
//Peça ao usuário vários números e some-os até que ele digite um número negativo,então exiba o total.
function ex9(){
    var soma = 0;
while(true){
    var number = parseFloat(prompt("digite o numero para ser somado: "));   
    if (number <0 || number == 0){
        alert("a soma do numeros digitado é de: " + soma);
        break
    }else{
        soma = soma + number;
    }
}
}

//10.Adivinhação
//Escolha um número aleatório de 1 a 10 e peça ao usuário para adivinhar.Dê dicas até ele acertar.
function ex10(){
    var alt = Math.floor(Math.random() * 10);
var palpite;
while(true){
    palpite = parseInt(prompt("Adivinhe o número:"));
    if (palpite == alt){
        alert("PARABÉNS VOCÊ ACERTOU O NÚMERO")
        break
    }else if(palpite < alt){
        alert("O número é MAIOR!");
    } 
    else{
        alert("O número é MENOR!");
    }
}
}

//11.Cálculo de Fatorial
//Peça um número e exiba seu fatorial(n!).
function ex11(){
    var numero = parseInt(prompt("Digite um número:"));
if (numero < 0){
    alert("Fatorial não existe para números negativos.");
} else {
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    }
    alert("O fatorial de " + numero + " é: " + fatorial);
}


//12.Validação de Nota
// Peça uma nota de 0 a 10 e continue pedindo até que o usuário insira um valor válido.
function ex12(){
    
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
}

//13.Média de Notas
// Peça 3 notas ao usuário, calcule e exiba sua média.Informe se ele foi aprovado(média≥7)ou reprovado
function ex13(){
    
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

alert("Média: " + media.toFixed(2));

if (media >= 7) {
    alert("Aprovado!");
} else {
    alert("Reprovado!");
}
}

//14.Caixa Eletrônico
// Peça um valor ao usuário e informe as possíveis cédulas para saque(100, 50,20,10,5,2,1).
function ex14(){
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
    alert("Notas de 100: " + notas100);
    alert("Notas de 50: " + notas50);
    alert("Notas de 20: " + notas20);
    alert("Notas de 10: " + notas10);
    alert("Notas de 5: " + notas5);
    alert("Notas de 2: " + notas2);
    alert("Notas de 1: " + notas1);

}
//15.Números Ímpares
// Peça um número ao usuário e exiba todos os números ímpares de 1 até esse número.
function ex15(){
    
var num = parseInt(prompt("Digite um número:"));

for (var i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
        alert(i);
    }
}
}

