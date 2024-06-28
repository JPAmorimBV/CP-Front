//armazena todos os elementos na variavel links
var links = document.querySelectorAll(".reservar");

//Funcao exibir alerta e escrever reservado
links.forEach(function(links){

    // adiciona um evento ao clickar na tag a 
    links.addEventListener('click', function(event){
        
        // muda o comportamento padrao da tag a 
        event.preventDefault();
        alert("O veículo foi reservado com sucesso!");

        // imprimir no console reservado 
        console.log('Reservado com sucesso!');

        // reescreve reservar para reservado
        links.textContent = "Reservado"
        
    });
});

// Recupera os registros da sessionStorage
var registros = JSON.parse(sessionStorage.getItem("registros")) || [];
var tabelaRegistros = document.getElementById("tabela");
cod =2800;
codV = cod+1;

// Coloca os dados na tabela 
registros.forEach(function(registro) {
  var row = tabelaRegistros.insertRow();
  row.insertCell(0).textContent = codV;
  row.insertCell(1).textContent = registro.marca;
  row.insertCell(2).textContent = registro.modelo;
  row.insertCell(3).textContent = registro.ano;
  row.insertCell(4).textContent = registro.dataC;
  row.insertCell(5).textContent = "Reservar";
});
  