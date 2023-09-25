const validInput = document.querySelector('input');

validInput.addEventListener("blur", blurInput);

function blurInput(evt) {
  console.log(evt.currentTarget.value.length);
  console.log(validInput.dataset.length);
   if (evt.currentTarget.value.length === Number(validInput.dataset.length)) {
     validInput.classList.add("valid");
     validInput.classList.remove("invalid")

  } else {
     validInput.classList.add("invalid");
     validInput.classList.remove("valid");
  }
}