function ex1(){
    var Texto = document.getElementById("input");
    const paragrafo = document.getElementById("ex1");
    paragrafo.innerText = Texto.value;
}
function ex2(){
    var nome = document.getElementById("input2").value;
    const print = document.getElementById("ex2");
    print.innerText = "Olá, " + nome + "!";
}
function ex3(){
    var idade = document.getElementById("input3").value;
    const resultado = document.getElementById("ex3");
    if (idade <= 18 ) {
        resultado.innerText = "Você é Menor de Idade";        
    } else{
        resultado.innerText = "Você é Maior de Idade";
    }

}
function ex4(){
    document.body.style.backgroundColor = "red";
}
function ex5(){
    const corpo = document.body;
    const botao = document.getElementById("botao");

    if (corpo.style.backgroundColor === "white" || corpo.style.backgroundColor === "") {

        corpo.style.backgroundColor = "black";
        corpo.style.color = "white";
        botao.innerHTML = "Modo Claro";
    } else {

        corpo.style.backgroundColor = "white";
        corpo.style.color = "black";
        botao.innerHTML = "Modo Escuro";
    }
}
function ex6(){
    const input = document.getElementById("input6");
    const lista = document.getElementById("lista");
    if (input.value.trim() === "") {
        alert("Por favor, digite um texto!");
        return;
    }
    const novoItem = document.createElement("li");
    novoItem.innerHTML = input.value;
    lista.appendChild(novoItem);
    input.value = "";
    input.focus();
}
function ex7(){
    const input = document.getElementById("input7");
    const lista = document.getElementById("lista2");
    if (input.value.trim() === "") {
        alert("Por favor, digite um texto!");
        return;
    }
    const novoItem = document.createElement("li");
    novoItem.innerHTML = input.value;
    novoItem.onclick = function() { this.remove(); };
    lista.appendChild(novoItem);
    input.value = "";
    input.focus();
}
function ex8(){
    let input = document.getElementById("input8");
    const display = document.getElementById("ex8");
    const numero = parseInt(input.value);
    if (numero == 0) {
        display.innerHTML = "Por favor, digite um número válido.";
    }
    if (numero % 2 === 0) {
        display.innerHTML = "O número é PAR.";
    } else {
        display.innerHTML = "O número é ÍMPAR.";
    }
}
function ex9(){
    var senha = document.getElementById("input9").value;
    var display = document.getElementById("ex9");
    if (senha.length >= 6) {
        display.innerHTML = " Senha válida! Possui 6 ou mais caracteres.";
    } else {
        display.innerHTML = " Erro: A senha deve ter no mínimo 6 caracteres.";
    }
}
// //Criar um mini sistema de cadastro:
// Deve ter:
// ● input nome
// ● botão adicionar
// ● lista de nomes
// ● botão remover para cada item
// ● contador de quantos itens existem
function ex10(){
    var input = document.getElementById("input10");
    var lista = document.getElementById("ex10");
    var contador = document.getElementById("contador");
    if (input.value.trim() === "") {
        alert("Por favor, digite um texto!");
        return;
    }
    var novoItem = document.createElement("li");
    novoItem.innerHTML = input.value;

    var btnRemover = document.createElement("button");
    btnRemover.innerHTML = "Remover";
    btnRemover.onclick = function() {
        novoItem.remove();
        atualizarContador();
    };
    novoItem.appendChild(btnRemover);
    lista.appendChild(novoItem);

    atualizarContador();
    input.value = "";
    input.focus();

}
function atualizarContador() {
    var lista = document.getElementById("ex10");
    var contador = document.getElementById("contador");
    var total = lista.getElementsByTagName("li").length;
    contador.innerHTML = total;
}