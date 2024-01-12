// Criação de promessa
const myPromise = new Promise((resolve, reject) => {
  const nome = "Vinicius";

  if (nome === "Vinicius") {
    resolve("Usuário Vinicius encontrado!");
  } else {
    reject("O usuário Vinicius não foi encontrado!");
  }
});

myPromise.then((data) => {
  console.log(data);
});

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Vinicius";

  if (nome === "Vinicius") {
    resolve("Usuário Vinicius encontrado!");
  } else {
    reject("O usuário Vinicius não foi encontrado!");
  }
});

myPromise2
  .then((data) => {
    return data.toLowerCase();
  })
  .then((stringModificada) => {
    console.log(stringModificada);
  });

// Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
  const nome = "João";

  if (nome === "Vinicius") {
    resolve("Usuário Vinicius encontrado!");
  } else {
    reject("O usuário Vinicius não foi encontrado!");
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Aconteceu um erro: " + err);
  });

// Resolver várias promessas
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 ok! TimeOut");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  resolve("p2 ok!");
});

const p3 = new Promise((resolve, reject) => {
  resolve("p3 ok!");
});

const returnPromiseall = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

console.log("Antes de todas as Promises");

// Várias promessas com race
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4 ok! TimeOut");
  }, 2000);
});

const p5 = new Promise((resolve, reject) => {
  resolve("p5 ok!");
});

const p6 = new Promise((resolve, reject) => {
  resolve("p6 ok!");
});

const promiseall = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});

// Fetch request na API do Github
// Fetch API
const user = "deV1niborges";

// Faz uma requisição à API do GitHub para obter informações sobre o usuário especificado
fetch(`https://api.github.com/users/${user}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json", // Especifica o tipo de conteúdo aceito na resposta (formato JSON)
  },
})
  .then((res) => res.json())
  .then((data) => {
    // Verifica se a resposta contém dados e se o avatar_url está presente
    if (data && data.avatar_url) {
      // Cria um elemento de imagem (avatar) e um parágrafo (bioParagraph)
      const avatar = document.createElement("img");
      const bioParagraph = document.createElement("p");

      // Define o ID da imagem e a URL do avatar obtida da resposta da API
      avatar.setAttribute("id", data.id);
      avatar.setAttribute("src", data.avatar_url);

      // Aplica estilos para centralizar a imagem horizontalmente
      avatar.style.display = "block";
      avatar.style.marginLeft = "auto";
      avatar.style.marginRight = "auto";
      avatar.style.borderRadius = "30px 15px";

      // Adiciona a bio do usuário ao parágrafo, ou um texto se a bio estiver vazia
      bioParagraph.textContent = data.bio || "Bio não disponível";
      bioParagraph.style.textAlign = "center";

      // Adiciona a imagem e o parágrafo ao corpo do documento HTML
      document.body.appendChild(avatar);
      document.body.appendChild(bioParagraph);
    } else {
      console.log("Usuário não encontrado ou avatar indisponível.");
    }
  })
  .catch((err) => {
    const problem = document.createElement("p");

    problem.innerHTML = "Houve um erro: " + err;
    problem.style.textAlign = "center";

    document.body.appendChild(problem);
  });