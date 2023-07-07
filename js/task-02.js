const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//FirstTry
// const ingredientsEl = [];

// ingredients.forEach(function (ingredient) {
//   const ingredientNameEl = document.createElement("li");
//   ingredientNameEl.classList.add("item");
//   ingredientNameEl.textContent = ingredient;
//   ingredientsEl.push(ingredientNameEl);
// })
// console.log(ingredientsEl);
// const ingredientEl = document.querySelector("ul");
// console.log(ingredientEl);
// ingredientEl.append(...ingredientsEl);
//SecondTry 
const ingredientEl = document.querySelector("ul");

const createListOfLi = ingredientsArray => {
  return ingredientsArray.map(ingredient => {
  const ingredientNameEl = document.createElement("li");
  ingredientNameEl.classList.add("item");
  ingredientNameEl.textContent = ingredient;
  return ingredientNameEl
  })
}
const namesList = createListOfLi(ingredients);

ingredientEl.append(...namesList);