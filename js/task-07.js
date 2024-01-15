const range = document.querySelector('input');
console.log(range);
const text = document.querySelector('span')
console.log(text)
range.addEventListener('input', function() {
    const rangeValue = range.value;
    text.style.fontSize = rangeValue + "px";
})
