// const categoriesEl = document.querySelectorAll("ul#categories li.item");
// console.log('Number of categories:', categoriesEl.length);

// const categoryNamesArray = document.querySelectorAll("li.item");
// // categoryNamesArray.forEach(function (category) {
// //     let categoryName = category.children;
// //     console.log(categoryName)
// //     let categoryLength = category.querySelectorAll('li');
// //     console.log(``)
// //     console.log(`Category: ${categoryName.textContent}`);
// //     console.log(`Elements: ${categoryLength.length}`)
// // });


const categoriesElem = document.body.firstElementChild.nextSibling.nextSibling;
console.log('Number of categories:', categoriesElem.children.length);

const itemEl = document.querySelectorAll(".item");
itemEl.forEach(function (item) {
    console.log(``)
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`)
})