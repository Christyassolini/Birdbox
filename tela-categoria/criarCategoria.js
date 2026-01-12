const categoriaContainer = document.getElementById("categoria-container");
const cadastrarCategoria = document.getElementById("cadastrar-categoria-id");

function mostrarCadastroCategoria(){

  categoriaContainer.classList.remove("active");
  cadastrarCategoria.classList.add("active");
}

function mostrarCriarCategoria() {
  cadastrarCategoria.classList.remove("active");
  categoriaContainer.classList.add("active");
}