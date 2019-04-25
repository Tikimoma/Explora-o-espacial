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

let galeria = function (Index) {
  let slide = document.getElementById('slide')
  let srcImage = servidorDasImagens + todasAsImagens[Index];
  slide.src = srcImage;
};

let index = 0;
galeria(index);

let proximo = document.getElementById('proximo');
proximo.addEventListener('click', function (e) {
  index++;
  if (index === 5) {
    index = 0;
  }
  galeria(index);
});

let anterior = document.getElementById('anterior');
anterior.addEventListener('click', function (e) {
  index--;
  if (index === -1) {
    index = 4;
  }
  galeria(index);
});
