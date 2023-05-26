const formulario = document.getElementById('form');

let longarinas;
let longarinasqQtd = 2;

let pranchas;
let pranchasQtd = 3;

let molduraFrontalHor;
let molduraFrontalHorQtd = 4;

let molduraFrontalVert;
let molduraFrontalVertQtd = 4;

let molduraLatHor;
let molduraLatHorQtd = 4;

let molduraLatVert;
let molduraLatVertQtd = 4;

let molduraTopoVert;
let molduraTopoVertQtd = 2;

let molduraTopoHor;
let molduraTopoHorQtd = 2;


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const comprimento = parseInt(document.getElementById('comprimento').value);
    const profundidade = parseInt(document.getElementById('profundidade').value);
    const altura = parseInt(document.getElementById('altura').value);

    longarinas = profundidade + 50;

    pranchas = comprimento;

    molduraLatHor = comprimento + 50;

    molduraLatVert = altura + 21 - 100;

    molduraFrontalHor = profundidade;

    molduraFrontalVert = altura + 66 - 100;

    molduraTopoVert = molduraLatHor;

    molduraTopoHor = profundidade - 50;
    
    console.log("Longarina: " + longarinas);
    console.log("Prancha: " + pranchas);
    console.log("molduraLatHor: " + molduraLatHor);
    console.log("molduraLatVert: " + molduraLatVert);
    console.log("molduraFrontalHor: " + molduraFrontalHor);
    console.log("molduraFrontalVert: " + molduraFrontalVert);
    console.log("molduraTopoVert: " + molduraTopoVert);
    console.log("molduraTopoHor: " + molduraTopoHor);


    
})

