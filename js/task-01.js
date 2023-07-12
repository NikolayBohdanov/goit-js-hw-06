const categoriesElem = document.body.firstElementChild.nextSibling.nextSibling;
console.log('Number of categories:', categoriesElem.children.length);

const itemEl = document.querySelectorAll(".item");
itemEl.forEach(function (item) {
    console.log(``)
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`)
})