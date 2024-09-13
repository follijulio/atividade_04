function redirecionamento(id) {
  fetch("/json/animais.json")
    .then((response) => response.json())
    .then((data) => {
      const animal = data.find((item) => item.id == id);
      window.location.href = `modelo.html?id=${animal.id}`;
    })
    .catch((erro_prog) =>
      console.error("Erro ao carregar os dados do animal:", erro_prog)
    );
}