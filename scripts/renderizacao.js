const id = new URLSearchParams(window.location.search).get("id");

fetch("/json/animais.json")
    .then((response) => response.json())
    .then((data) => {
        const animal = data[id - 1];
        const imagem_animal = document.createElement("img");
        const area_imagem = document.getElementById("imagem");
        imagem_animal.src = animal.imagem

        area_imagem.appendChild(imagem_animal);
        document.getElementById("nome").textContent = animal.nome;
        document.getElementById("imagem").src = animal.imagem;
        document.getElementById("descricao").textContent = animal.descricao;
        document.getElementById("bioma").textContent = animal.bioma;
    })
    .catch((error) => {
        const button = document.createElement("button");
        button.textContent = "VOLTAR A PÁGINA INICIAL";
        button.addEventListener("click", () => {
            carregarPaginaInicial();
        });
        console.error("Erro ao carregar os animal:", error);
    });

function carregarPaginaInicial() {
    window.location.replace("index.html");
}