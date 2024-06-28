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


  