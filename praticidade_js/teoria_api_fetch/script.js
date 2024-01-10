function filledList() {
  // Realiza uma requisição à API usando a Fetch API e obtém uma Promise
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json()) // Converte a resposta para JSON quando a Promise for resolvida
    .then((data) => {
      // Manipula os dados obtidos da requisição

      const lista = document.querySelector("#list");

      // Itera sobre os itens (objetos) no array 'data'
      data.map((item) => {
        // Cria um elemento <li> para cada item
        const li = document.createElement("li");

        // Define o atributo 'id' do elemento <li> com o valor do ID do item
        li.setAttribute("id", item.id);

        // Define o conteúdo do elemento <li> com o título do item
        li.innerHTML = item.title;

        // Adiciona o elemento <li> à lista no HTML
        lista.appendChild(li);
      });
    });
}
