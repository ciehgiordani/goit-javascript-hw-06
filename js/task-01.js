let categories = document.getElementById('categories')
console.log('Number of categories:', categories.children.length)

let children = document.getElementsByTagName('h2')
// console.log(children)

for (const child of children) {
    console.log('Category:', child.textContent);
    console.log('Elements:', child.parentNode.lastElementChild.children.length)
}   