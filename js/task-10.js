function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

const buttCreate = document.querySelector('button[data-create]');
buttCreate.addEventListener('click', createBoxesCallback)
function createBoxesCallback(evt) {
  createBoxes(input.value);
};

const buttDestroy = document.querySelector('button[data-destroy]');
buttDestroy.addEventListener('click', destroyBoxesCallback)
function destroyBoxesCallback(evt) {
  destroyBoxes();
};

let widthHeight = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${widthHeight}px`;
      div.style.height = `${widthHeight}px`;
    widthHeight += 10;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
};

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
  widthHeight = 30;
};
