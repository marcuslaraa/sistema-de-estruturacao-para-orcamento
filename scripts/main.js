const formulario = document.getElementById("form");

let itensDoProduto = [
  { longarina: 0, longarinasqQtd: 2 },
  { pranchas: 0, pranchasQtd: 2 },
  { molduraFrontalHor: 0, molduraFrontalHorQtd: 4 },
  { molduraFrontalVert: 0, molduraFrontalVertQtd: 4 },
  { molduraLatHor: 0, molduraLatHorQtd: 4 },
  { molduraLatVert: 0, molduraLatVertQtd: 4 },
  { molduraTopoHor: 0, molduraTopoHorQtd: 2 },
  { molduraTopoVert: 0, molduraTopoVertQtd: 2 },
  { fechamentoFrontalL1: 0,fechamentoFrontalL2: 0 ,fechamentoFrontalQtd: 2 },
  { fechamentoLateralL1: 0,fechamentoLateralL2: 0, fechamentoLateralQtd: 2 },
  { fechamentoBaseL1: 0,fechamentoBaseL2: 0, fechamentoBaseQtd: 1 },
  { fechamentoTopoL1: 0,fechamentoTopoL2: 0, fechamentoTopoQtd: 1 },
];

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const comprimento = parseInt(document.getElementById("comprimento").value);
  const profundidade = parseInt(document.getElementById("profundidade").value);
  const altura = parseInt(document.getElementById("altura").value);
  let urlTabela = "../paginas/tabela.html";

  if (comprimento > 1199 && comprimento < 2000) {
      itensDoProduto[0].longarinasqQtd++;
      itensDoProduto[5].molduraLatVertQtd += 2;
  } else if (comprimento >= 2000 && comprimento < 3000) {
    itensDoProduto[0].longarinasqQtd += 3;
    itensDoProduto[5].molduraLatVertQtd += 6;
  } else if (comprimento >= 3000 && comprimento < 3600) {
    itensDoProduto[0].longarinasqQtd += 4;
    itensDoProduto[5].molduraLatVertQtd += 8;
  } else if (profundidade > 800 && profundidade < 1300) {
    itensDoProduto[3].molduraFrontalVertQtd += 2;
  } else if (profundidade >= 1300 && profundidade < 1900) {
    itensDoProduto[3].molduraFrontalVertQtd += 4;
  } else if (profundidade >= 1900 && profundidade < 2500) {
    itensDoProduto[3].molduraFrontalVertQtd += 6;
  }

  itensDoProduto[0].longarina = profundidade + 50;

  itensDoProduto[1].pranchas = comprimento;

  itensDoProduto[2].molduraFrontalHor = profundidade;

  itensDoProduto[3].molduraFrontalVert = altura + 66 - 100;

  itensDoProduto[4].molduraLatHor = comprimento + 50;

  itensDoProduto[5].molduraLatVert = altura + 21 - 100;

  itensDoProduto[6].molduraTopoHor = profundidade - 50;

  itensDoProduto[7].molduraTopoVert = itensDoProduto[4].molduraLatHor;

  itensDoProduto[8].fechamentoFrontalL1 = profundidade;
  
  itensDoProduto[8].fechamentoFrontalL2 = altura + 21 + 45;

  itensDoProduto[9].fechamentoLateralL1 = comprimento + 50;

  itensDoProduto[9].fechamentoLateralL2 = altura + 21;

  itensDoProduto[10].fechamentoBaseL1 = comprimento;

  itensDoProduto[10].fechamentoBaseL2 = profundidade;

  itensDoProduto[11].fechamentoTopoL1 = comprimento + 50;

  itensDoProduto[11].fechamentoTopoL2 = profundidade + 50;

  

  window.open(urlTabela, "_blank");

  let itensJSON = JSON.stringify(itensDoProduto);

  localStorage.setItem("Itens", itensJSON);
});
