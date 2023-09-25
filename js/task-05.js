const nameInput = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output");
 console.log(nameSpan);
nameInput.addEventListener("input", addNameInput);

function addNameInput(event) {
  if (nameInput.value === '') {
    nameSpan.textContent = "Anonymous";

  } else {
    const evtVal = event.currentTarget.value;
    nameSpan.textContent = evtVal.trim();
  }
}