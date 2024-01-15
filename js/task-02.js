const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  // console.log(ingredient);
  const item = document.createElement("li");
  item.textContent = ingredient;
  list.append(item);
}
