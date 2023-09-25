const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Condiments',
];
const ulIngred = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach(elem => {
  let li = document.createElement("li");
  li.textContent = elem;
  console.log(li);
  li.classList.add("item");
  console.log(li.classList);
  fragment.append(li);
});

ulIngred.append(fragment);
ulIngred.style.listStyle = "none";