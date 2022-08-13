// getElementById
const animals = document.getElementById('animals');
console.log(animals);

// getElementsByClassName
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

// querySelector
const firstLi = document.querySelector('li');
console.log(firstLi);

// querySelector href
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// querySelectorAll
const animalsImg = document.querySelectorAll('.animals img');
console.log(animalsImg[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function (item) {
  console.log(item);
});

// EXERCÍCIOS
console.log('');
console.log('// EXERCÍCIO //');
console.log('');

// Retorne no console todas as imagens do site
const siteImgs = document.querySelectorAll('img');
console.log(siteImgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const startImg = document.querySelectorAll('img[src^="images/imagem"]');
console.log(startImg);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animals-info
const firstH2 = document.querySelector('.animals-info h2');
console.log(firstH2);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');
console.log(lastP[lastP.length - 1]);
