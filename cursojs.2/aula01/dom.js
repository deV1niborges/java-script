// DOM - Dcument Object Model

// Selecionando um elemento pelo id
const elementosporId = document.getElementById("meuId");
console.log(elementosporId);

const elementosporId2 = document.querySelector("#meuId");
console.log(elementosporId2);

const elementosporClasse = document.getElementsByClassName("minhaClasse");
console.log(elementosporClasse);

const elementosporClasse2 = document.querySelector(".minhaClasse");
console.log(elementosporClasse2);

// Manipular conteúdo de texto
const element = document.querySelector("#meuId");

console.log(element.textContent);

setTimeout(() => {
  element.textContent = "mudei de texto";
}, 1000);

// Trabalhando com atributos
const link = document.querySelector("a");

console.log(link);

link.setAttribute("href", "https://horadecodar.com.br/cursos");

console.log(link.getAttribute("href"));

console.log(link.hasAttribute("target"));

link.removeAttribute("target");

// Manipulação de classes do CSS
const elemento = document.querySelector("#meudId");

element.classList.add("novaClasse");

element.classList.remove("minhaClasse");

element.classList.toggle("outraClasse");

element.classList.toggle("outraClasse");

// Manipular o CSS
const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue";
elemento3.style.backgroundColor = "black";

// background-color => backgroundColor

// Navegação entre nos
const element4 = document.querySelector("#meuInput");

const pai = element4.parentNode;

console.log(pai);

// Obter o primeiro filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);

// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div");
console.log(novoElemento);

novoElemento.textContent = "Minha div de JavaScript";
console.log(novoElemento);

document.body.appendChild(novoElemento);

document.body.insertBefore(novoElemento, pai);

document.body.removeChild(elementosporId);

// Eventos

// Click

const botao = document.querySelector("button");

botao.addEventListener("click", function () {
  console.log("Botão clicado!");
});

// Mouse
const elemento5 = document.querySelector("#meuFormulario");

elemento5.addEventListener("mouseover", function () {
  console.log("O mouse passou aqui!");
});

// Teclado
const campoInput = document.querySelector("#meuInput");

campoInput.addEventListener("keydown", function () {
  console.log("Tecla pressionada");
});

// Formularios
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Form enviado");
});

// Propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function () {
  console.log("Clique capturado no pai");
});

document
  .querySelector("#elementoFilho")
  .addEventListener("click", function (event) {
    //event.stopPropagation()

    console.log("Clique capturado do filho");
  });

document.querySelector("#meuLink").addEventListener("click", function (event) {
  event.preventDefault();

  console.log("Clicou no link!");
});

document
  .querySelector("#elementoPai")
  .addEventListener("click", function (event) {
    if (event.target.matches(".classeDosFilhos")) {
      console.log("Evento delegado para o filho!");
    }
  });
