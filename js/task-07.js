const input = document.querySelector("#font-size-control");

const textSize = document.querySelector("#text");

input.addEventListener("input", changeSize);

function changeSize(evt) {
console.log(`${evt.currentTarget.value}px`
);
  textSize.style.fontSize = `${evt.currentTarget.value}px`;

}