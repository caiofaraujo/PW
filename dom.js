function iniciar () {
  // VERIFICAR SE O BOTÃO FOI CLICADO
  /*
    document.querySelector = Seleciona 1 usando CSS selector
    document.querySelectorAll = Selecionar vários
    document.getElementById = Seleciona 1 componente pelo ID
    document.getElementsByClassName = Selecionar varios componentes pela classe
    documento.getElementsByTagName = Selecionar varios pela tag do componente
   */

   //  var btn = document.getElementsByTagName("button")[0];
   //  var btn = document.querySelectorAll("button")[0];

  var btn = document.querySelector("button");
  btn.addEventListener("click", validar);
}

function validar () {
  // IMPRIMIR O VALOR DO CAMPO
  var campo = document.querySelector("input");
  var valor = campo.getAttribute("value");
  campo.setAttribute("value", "2017-03-27");
  var atual = campo.value;

  if (Date.parse(atual)){
    var elementoLista = document.createElement("li");
    var lista = document.getElementById("lista");
    elementoLista.textContent = atual;
    lista.appendChild(elementoLista);
  } else {
    campo.value = "2017-03-27";
  }

  
}



//WINDOW => Aba do Browser
window.addEventListener("load", iniciar);
