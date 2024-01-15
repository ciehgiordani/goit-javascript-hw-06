
const counter = document.getElementById('counter')
const count = document.getElementById('value')

let counterValue = 0;
    
const updateCounterUI = () => {
  count.textContent = counterValue;
}

counter.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const action = event.target.dataset.action;
    counterValue += action === "increment" ? 1 : -1;
    updateCounterUI();
  }
});
  
//   // Event listener for increment button
//   let incrementButton = document.getElementsByTagName('[data-action.increment]');
// incrementButton.addEventListener('click', increment);
  
// // Event listener for decrement button
//   let decrementButton = document.getElementsByTagName('[data-action.decrement]');
// decrementButton.addEventListener('click', decrement);
  
