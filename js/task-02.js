// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.


// Напиши скрипт, который для каждого элемента массива ingredients:

//     Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//     Добавит название ингредиента как его текстовое содержимое.
//     Добавит элементу класс item.
//     После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const newIngredients = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item');
  return element;
}
);
  // console.log(newIngredients)
const ingredientsUl = document.querySelector('ul');
ingredientsUl.append(...newIngredients);

// document.querySelector('ul').append(...newIngredients);


