function irParaPagina1() {
    window.location.href = "exercicio1.html"; // Coloque o nome do arquivo ou a URL aqui
}
function irParaPagina2() {
    window.location.href = "exercicio2.html"; // Coloque o nome do arquivo ou a URL aqui
}
function exercicio1() {
    document.getElementById('texto').innerText="Texto Alterado"
}

let numero = 0; // Variável para guardar o valor

function incrementar() {
    numero = numero + 1; // Soma 1 ao valor atual
    // Atualiza o texto do parágrafo com o novo número
    document.getElementById("contagem").innerText = numero;
}