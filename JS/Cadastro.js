// adiciona um evento que é ativado ao recarregar a pagina e só é executado depois de recarregar a página
document.addEventListener("DOMContentLoaded", function() {

    // pega o conteudo do formulario e armazna na variável form
    const form = document.getElementById("formulario");
    
    // adiciona um evento que aciona o codigo só depois de enviar o formulario
    form.addEventListener("submit", function(event) {
        // evita o comportamento padrão de enviar o formulario e carregar a pagina
      event.preventDefault();
      
    //  armazena o conteudo do formulario em variáveis
      const marca = document.getElementById("marca").value;
      const modelo = document.getElementById("modelo").value;
      const ano = document.getElementById("ano").value;
      const dataC = document.getElementById("Data de compra").value;
      
      // Cria uma nova linha na tabela 
      const table = document.getElementById("tabela");
      const newRow = table.insertRow(-1);
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
      const cell5 = newRow.insertCell(4);
      const cell6 = newRow.insertCell(5);
      
      // Adiciona os dados do formulário na linha da tabela 
      codigo = 2890;
      cell1.textContent = codigo++;
      cell2.textContent = marca;
      cell3.textContent = modelo;
      cell4.textContent = ano;
      cell5.textContent = dataC;
      cell6.textContent = <a class="reservar" href="#">Reservar</a>;

      
      // reseta o formulario depois de salvar
      form.reset();
    });
  });