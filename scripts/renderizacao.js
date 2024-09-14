const id = new URLSearchParams(window.location.search).get("id");

fetch("../json/animais.json")
    .then((response) => response.json())
    .then((data) => {
        const animal = data[id - 1];
        document.getElementById("icon").href = animal.imagem
        document.getElementById("titulo").textContent = animal.nome;
        document.getElementById("nome").textContent = animal.nome;
        document.getElementById("imagem").src = animal.imagem;
        document.getElementById("descricao").textContent = animal.descricao;
        document.getElementById("bioma").textContent = animal.bioma;

    })
    .catch((erro) => {
        const button = document.createElement("button");
        button.textContent = "VOLTAR A PÁGINA INICIAL";
        button.addEventListener("click", () => {
            carregarPaginaInicial();
        });
        console.error("Erro ao carregar os animal:", erro);
    });

function carregarPaginaInicial() {
    window.location.replace("home.html");
} 