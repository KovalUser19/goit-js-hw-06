/* const categories = document.querySelector("#categories");
const categoriesChildren = Array.from(categories.children);
console.log(`Number of categories: ${categoriesChildren.length}`);

categoriesChildren.forEach(elem => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(`Elements: ${elem.querySelector("ul").children.length}`);
}
); */

const categories = document.querySelector("#categories");
const categoriesChildren = Array.from(categories.children);

console.log(`Number of categories: ${categoriesChildren.length}`);

 categoriesChildren.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
 });
