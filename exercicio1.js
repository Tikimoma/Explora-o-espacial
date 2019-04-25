// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML


let todosBotoes = document.getElementsByClassName('botao-expandir-retrair');


todosBotoes.forEach(function (element) {
    element.addEventListener('click', function(e){
      if (element.parentNode.classList.contains('expandido')) {
          element.innerHTML = "+";
          element.parentNode.classList.remove('expandido');
      } else {
          element.innerHTML = "-";
          element.parentNode.classList.add('expandido');
      }
    });
  }
);
