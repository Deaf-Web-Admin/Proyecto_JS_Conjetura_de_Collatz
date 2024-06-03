var encabezados = ["Tipo", "Formula", "Resultado"];
var margin = encabezados.length * 1;
var ancho = encabezados.length * 100;
document.getElementById("tabla1").style.width = margin + ancho + "px";
var transito = "";
var celdas = [];

function GoTo(param) {
  div = document.getElementById("Intro");
  div.style.display = "none";
  div = document.getElementById("Spit");
  div.style.display = "none";
  div = document.getElementById(param);
  div.style.display = "flex";
}

function AplicarFormula(transito) {
  if (transito % 2 == 0) {
    transito = transito / 2;
    celdas.push("Par");
    celdas.push("se divide /2 ");
    celdas.push(transito);
    comprobar(transito);
  } else {
    transito = transito * 3 + 1;
    celdas.push("Impar");
    celdas.push("se multiplica x3 +1");
    celdas.push(transito);
    comprobar(transito);
  }
}
function Finalizar() {
  celdas.push("Infinito");
  celdas.push("Infinito");
  celdas.push("Infinito");
  const container = document.querySelector(".tabla1");

  for (const encabezado of encabezados) {
    const div = document.createElement("div");
    div.classList.add("headers1");
    div.innerHTML = `
    ${encabezado}
    `;
    container.appendChild(div);
  }

  const container2 = document.querySelector(".tabla1");

  for (const celda of celdas) {
    const div = document.createElement("div");
    div.classList.add("celdas1");
    div.innerHTML = `
    ${celda}
    `;
    container2.appendChild(div);
  }

  GoTo("Spit");
}

function comprobar(transito, celdas) {
  if (transito == 1) {
    Finalizar(celdas);
  } else {
    AplicarFormula(transito);
  }
}

function Ejecutar() {
  var myInput1 = document.querySelector(".TheChosen").value;
  var transito = myInput1;
  celdas.push(" ");
  celdas.push(" ");
  celdas.push(transito);
  comprobar(transito);
}

function StartOver() {
  celdas = [];
  document.querySelector(".TheChosen").value = "";
  document.querySelector(".tabla1").innerHTML = "";
  GoTo("Intro");
}
