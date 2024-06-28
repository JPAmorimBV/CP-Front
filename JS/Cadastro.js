// pega os dados do formulario
function enviarFormulario() {
  
  // pega os valor com o id e armazena em variáveis  
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  var ano = document.getElementById("ano").value;
  var dataC = document.getElementById("dataC").value;
  
  // tranforma em objeto as variáveis com os dados do formulario
  var dados = {
    marca: marca,
    modelo: modelo,
    ano: ano,
    dataC: dataC,
  };
  
  // coloca e armazena os dados na sessionsStorange  
  var registros = JSON.parse(sessionStorage.getItem("registros")) || [];
  registros.push(dados);
  sessionStorage.setItem("registros", JSON.stringify(registros));
  
  alert("Carro registrado com sucesso!")
  
  window.location.href ="Frota.html"
  
  return false; 
}