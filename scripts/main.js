const formulario = document.getElementById('form');

let longarinas;
let longarinasqQtd;

let pranchas;
let pranchasQtd;

let molduraFrontalHor;
let molduraFrontalHorQtd;

let molduraFrontalVert;
let molduraFrontalVertQtd;

let molduraLatHor;
let molduraLatHorQtd;

let molduraLatVert;
let molduraLatVertQtd;

let molduraTopoVert;
let molduraTopoVertQtd;

let molduraTopoHor;
let molduraTopoHorQtd;


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const comprimento = parseInt(document.getElementById('comprimento').value);
    const profundidade = parseInt(document.getElementById('profundidade').value);
    const altura = parseInt(document.getElementById('altura').value);

    longarinas = profundidade + 50;
    console.log(longarinas);

    pranchas = comprimento;
    

    
})

