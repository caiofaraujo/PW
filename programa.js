let lista = [];
let atual = 0;




let iniciar = (e) => {
  // "let" ao fim do loop a variavel deixa de existir
  // Criando objeto do tipo "XMLHttpRequest"
  var xhr = new XMLHttpRequest();
  // Abrir requisição (informar endereço onde deve ser realizado a busca)
  // Informar método (get) e caminho de busca (dados.json)

  xhr.open("get", "dados.json");
  xhr.addEventListener("load", atualizarLista);
  xhr.send();
}

let atualizarLista = (evt) => {
  let res = evt.target.response;
  lista = JSON.parse(res);
  atual = 0;
  imprimir(lista[atual]);
}

let imprimir = (obj) => {
  // let obj = JSON.parse(xhr.response);
  for (let prop in obj) {
    let campo = document.querySelector("#"+prop);
    campo.value = obj[prop];
  }
}

window.addEventListener("load", iniciar);
