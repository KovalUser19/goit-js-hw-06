let counterValue = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

decrement.addEventListener("click", decrementCounter);

function decrementCounter() {
  counterValue--;
  value.textContent = counterValue;
  console.log(counterValue);
}
increment.addEventListener("click", incrementCounter);

function incrementCounter() {
  counterValue++;
  value.textContent = counterValue;
   console.log(counterValue);
}
