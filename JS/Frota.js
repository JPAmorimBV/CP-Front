//armazena todos os elementos na variavel links
var links = document.querySelectorAll(".reservar");
var subst = "Reservado";
//Funcao alerta e escrever reservado
links.forEach(function(links){
    links.addEventListener('click', function(event){
        event.preventDefault();
        alert("O veículo foi reservado com sucesso!");
        console.log('Reservado com sucesso!');
        links.textContent = "Reservado"
        
    });
});