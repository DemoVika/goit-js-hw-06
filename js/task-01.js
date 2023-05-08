const numberOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

const arrayOfElements = document.querySelectorAll('.item');
console.log(arrayOfElements);

arrayOfElements.forEach(function (element) {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});
