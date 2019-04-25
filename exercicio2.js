  // Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let galeria = function (Ind) {
  let slide = document.getElementById('slide')
  let srcImage = servidorDasImagens + todasAsImagens[Ind];
  slide.src = srcImage;
};

let indice = 0;
galeria(indice);

let proximo = document.getElementById('proximo');
proximo.addEventListener('click', function (e) {
  indice++;
  if (indice === 5) {
    indice = 0;
  }
  galeria(indice);
});

let anterior = document.getElementById('anterior');
anterior.addEventListener('click', function (e) {
  indice--;
  if (indice === -1) {
    indice = 4;
  }
  galeria(indice);
});
