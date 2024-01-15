
let textInput = document.getElementById("validation-input");

const blankPlaceHolder = () => {
  textInput.placeholder = "",
  console.log(textInput)
}    

const allowedCount = textInput.dataset.length;
console.log(allowedCount)

const invalidTextLength = () => {
  textInput.classList.remove("valid");
  textInput.classList.add("invalid");
  // textInput.setAttribute('style', 'border-color: #f44336');
}
const validTextLength = () => {
  textInput.classList.remove("invalid");
  textInput.classList.add("valid");
  // textInput.setAttribute('style', 'border-color: #4caf50');
}

// textInput.addEventListener("input", (event) => {
//   textInput.textContent = event.currentTarget.value;
//   console.log(textInput.value.length);
textInput.addEventListener("focus", () => {
  if (textInput.value.length == allowedCount) {
    console.log(textInput.value.length == allowedCount),
      validTextLength();
  } else {
    invalidTextLength();
  }
});







// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });









// const countLength = () => {
//   if (textInput.placeholder.length = 6) {
//   textInput.style.borderColor = "green",
//   }
// }

// textInput.addEventListener("focus", countLength)
// textInput.addEventListener("blur", blankPlaceHolder)

// textInput.addEventListener("blur", () => {
//   textInput.style.borderColor = "red";
// });


