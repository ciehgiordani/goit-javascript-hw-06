function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('button');
const body = document.querySelector('body')
const changeColor = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor
  const wordColor = document.querySelector('.color')
  wordColor.textContent = newColor;
  wordColor.style.fontstyle = 'bold'1
  console.log(newColor)
}
button.addEventListener('click', changeColor)
