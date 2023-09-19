const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Condiments',
];
const ulIngred = document.querySelector("#ingredients");

ingredients.forEach(elem => {
  let li = document.createElement("li");
  li.textContent = elem;
  console.log(li);
  li.classList.add("item");
  console.log(li.classList);
  ulIngred.append(li);

});
