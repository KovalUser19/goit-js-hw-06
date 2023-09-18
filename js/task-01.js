const categories = document.querySelector("#categories");
 const item = document.querySelector(".item")
const itemFirstChild = item.firstElementChild;
console.log(itemFirstChild.textContent);

const categoriesChildren = categories.children;
console.log(`Number of categories: ${categoriesChildren.length}`)

const text = document.querySelector("h2");
console.log(`Category: ${text.textContent}`);


categoriesChildren.forEach(elem => console.log(elem));