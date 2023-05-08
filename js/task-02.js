const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrayElementOfIngradients = [];
  
ingredients.forEach(function (element) {

  const elementOfIngradients = document.createElement('li');
  elementOfIngradients.textContent = element;

  elementOfIngradients.classList.add('item');

  arrayElementOfIngradients.push(elementOfIngradients);
 
})

const list = document.querySelector('#ingredients')
 list.append(...arrayElementOfIngradients);
 console.log(arrayElementOfIngradients);


