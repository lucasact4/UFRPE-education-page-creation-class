/*
1 - Usa document para manipular/buscar o DOM(Página HTML)
2 - Busca a TAG HTML que utiliza o ID
3 - Filtra por eventos(ações) de "click"
4 - Engata uma função diretamente
5 - Define um hash(variavel{const} do tipo lista{[valor1, valor2]}) de cores hexadecimais
6 - Manipula o DOM buscando a tag <body> no HTML e mudando o estilo(cor de fundo) randomicamente ao clicar
*/
document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#ffb6b9", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});


/* Adicionando Tooltip do bootstrap no HTML */
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
