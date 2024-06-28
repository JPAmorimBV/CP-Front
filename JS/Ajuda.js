const form = document.getElementById("formularioComb");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o recarregamento da página

  const precoGas = parseFloat(document.getElementById("gasolina").value);
  const precoEta = parseFloat(document.getElementById("etanol").value);

  let melhoComb;

  if (precoGas * 0.7 > precoEta) {
    melhoComb = "Gasolina";
  } else {
    melhoComb = "Etanol";
  }

  resultadoDiv.textContent = "O combustível mais vantajoso é o(a) ${melhoComb}.";
});