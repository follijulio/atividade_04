const id = new URLSearchParams(window.location.search).get("id");

fetch("../json/regioes.json")
    .then((response) => response.json())
    .then((data) => {
        const regiao = data[id - 1];
        
        document.getElementById("icon").href = regiao.imagem;
        document.getElementById("titulo").textContent = regiao.nome;
        document.getElementById("nome").textContent = regiao.nome;
        document.getElementById("imagem").src = regiao.imagem;
        document.getElementById("descricao").textContent = regiao.descricao;
    })
    .catch((erro) => {
        const button = document.createElement("button");
        button.textContent = "VOLTAR A PÁGINA INICIAL";
        button.addEventListener("click", () => {
            carregarPaginaInicial();
        });
        console.error("Erro ao carregar os regiao:", erro);
    });

function carregarPaginaInicial() {
    window.location.replace("index.html");
}