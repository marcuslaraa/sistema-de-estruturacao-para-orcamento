const formulario = document.getElementById("form");

let itensDoProduto = [
  { longarina: 0, longarinasqQtd: 2 },
  { pranchas: 0, pranchasQtd: 3 },
  { molduraFrontalHor: 0, molduraFrontalHorQtd: 4 },
  { molduraFrontalVert: 0, molduraFrontalVertQtd: 4 },
  { molduraLatHor: 0, molduraLatHorQtd: 4 },
  { molduraLatVert: 0, molduraLatVertQtd: 4 },
  { molduraTopoHor: 0, molduraTopoHorQtd: 2 },
  { molduraTopoVert: 0, molduraTopoVertQtd: 2 },
];


formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const comprimento = parseInt(document.getElementById("comprimento").value);
  const profundidade = parseInt(document.getElementById("profundidade").value);
  const altura = parseInt(document.getElementById("altura").value);

  let urlTabela = "../paginas/tabela.html";

  itensDoProduto[0].longarina = profundidade + 50;

  itensDoProduto[1].pranchas = comprimento;

  itensDoProduto[2].molduraFrontalHor = profundidade;

  itensDoProduto[3].molduraFrontalVert = altura + 66 - 100;

  itensDoProduto[4].molduraLatHor = comprimento + 50;

  itensDoProduto[5].molduraLatVert = altura + 21 - 100;

  itensDoProduto[6].molduraTopoHor = profundidade - 50;

  itensDoProduto[7].molduraTopoVert = itensDoProduto[4].molduraLatHor;

  window.open(urlTabela, "_blank");

  return itensDoProduto;

});


console.log(itensDoProduto);