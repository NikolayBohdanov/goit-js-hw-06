const categoriesEl = document.querySelectorAll("ul#categories li.item");
console.log('Number of categories:', categoriesEl.length);

const categoryNamesArray = document.querySelectorAll("li.item");
categoryNamesArray.forEach(function (Category) {
    let categoryName = Category.querySelector('h2');
    let categoryLength = Category.querySelectorAll('li');
    console.log(``)
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryLength.length}`)
});
