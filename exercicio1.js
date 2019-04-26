// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML


let todosBotoes = document.getElementsByClassName('botao-expandir-retrair');

  for (let botao of todosBotoes) {
      botao.addEventListener('click', function (e) {
          if (botao.parentNode.classList.contains('expandido')) {
            botao.innerHTML = "+";
            botao.parentNode.classList.remove('expandido');
          } else {
              botao.innerHTML = "-";
              botao.parentNode.classList.add('expandido');
          }
      });
  }
