function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', () => {
  const bgColor = getRandomHexColor();
  bodyEl.style.backgroundColor = bgColor;
  colorEl.textContent = bgColor;
})

