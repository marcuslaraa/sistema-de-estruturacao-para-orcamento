let objetoArmazenado = localStorage.getItem("Itens");
let objetoRecuperado = JSON.parse(objetoArmazenado);

console.log(objetoRecuperado)


const tabela = document.getElementById("tabela");
const tbody = document.createElement("tbody");

for (i = 0; i < itensDoProduto.length; i++) {
  let row = document.createElement("tr");

  for (j = 0; j < 3; j++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(
      "Linha " + (i + 1) + ", Coluna " + (j + 1)
    );

    cell.appendChild(cellText);
    row.appendChild(cell);
  }

  tbody.appendChild(row);
  
}

tabela.appendChild(tbody);

localStorage.clear();


