const meuInput = document.getElementById("meuInput");
const meuBotao = document.getElementById("meuBotao");

meuInput.addEventListener("input", function() {
  if (meuInput.value.length >= 5) {
    meuBotao.style.display = "block";
  } else {
    meuBotao.style.display = "none";
  }
});