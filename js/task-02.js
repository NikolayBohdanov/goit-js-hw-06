const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = [];
ingredients.forEach(function (ingredient) {
  const ingredientNameEl = document.createElement("li");
  ingredientNameEl.classList.add("item");
  ingredientNameEl.textContent = ingredient;
  ingredientsEl.push(ingredientNameEl);
})
console.log(ingredientsEl);
const ingredientEl = document.querySelector("ul");
console.log(ingredientEl);
ingredientEl.append(...ingredientsEl);