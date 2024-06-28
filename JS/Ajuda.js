// pega as informações do formulario e do button e armazena em variáveis
const form = document.getElementById("formularioComb");
const resultadoDiv = document.getElementById("resultado");

// evento que inicia ao enviar o formulario
form.addEventListener("submit", function(event) {
  // Evita o recarregamento da página
  event.preventDefault(); 

  // pega pelo id e armazena em variáveis o etanl e a gasolina
  const precoGas = parseFloat(document.getElementById("gasolina").value);
  const precoEta = parseFloat(document.getElementById("etanol").value);

  // cria a variável melhor combustivel
  let melhoComb;
  // compara os combustiveis 
  if (precoGas * 0.7 > precoEta) {
    melhoComb = "Gasolina";
  } else {
    melhoComb = "Etanol";
  }
  // imprime o resultado na tela 
  resultadoDiv.textContent = "O combustível mais vantajoso é o(a) ${melhoComb}.";
});