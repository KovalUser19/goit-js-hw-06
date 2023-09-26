const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Condiments',
];
const ulIngred = document.querySelector("#ingredients");
const item = [];
ingredients.forEach(elem => {
  let li = document.createElement("li");
  li.textContent = elem;
  li.classList.add("item");
  item.push(li);
  console.log(item);
});

ulIngred.append(...item);
ulIngred.style.listStyle = "none";