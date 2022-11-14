import React from 'react';

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typesNames = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? 'active' : ''}
            >
              {typesNames[typeId]}{' '}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? 'active' : ''}
            >
              {size} sm.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {price} ₽</div>
        <button className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;

// {
//   "pizzas": [
//     {
//       "id": 0,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
//       "name": "Пепперони Фреш с перцем",
//       "types": [0, 1],
//       "sizes": [26, 30, 40],
//       "price": 803,
//       "category": 0,
//       "rating": 4
//     },
//     {
//       "id": 1,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
//       "name": "Сырная",
//       "types": [0],
//       "sizes": [26, 40],
//       "price": 245,
//       "category": 1,
//       "rating": 6
//     },
//     {
//       "id": 2,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
//       "name": "Цыпленок барбекю",
//       "types": [0],
//       "sizes": [26, 40],
//       "price": 295,
//       "category": 1,
//       "rating": 4
//     },
//     {
//       "id": 3,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
//       "name": "Кисло-сладкий цыпленок",
//       "types": [1],
//       "sizes": [26, 30, 40],
//       "price": 275,
//       "category": 2,
//       "rating": 2
//     },
//     {
//       "id": 4,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
//       "name": "Чизбургер-пицца",
//       "types": [0, 1],
//       "sizes": [26, 30, 40],
//       "price": 415,
//       "category": 3,
//       "rating": 8
//     },
//     {
//       "id": 5,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
//       "name": "Крэйзи пепперони",
//       "types": [0],
//       "sizes": [30, 40],
//       "price": 580,
//       "category": 2,
//       "rating": 2
//     },
//     {
//       "id": 6,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
//       "name": "Пепперони",
//       "types": [0, 1],
//       "sizes": [26, 30, 40],
//       "price": 675,
//       "category": 1,
//       "rating": 9
//     },
//     {
//       "id": 7,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
//       "name": "Маргарита",
//       "types": [0, 1],
//       "sizes": [26, 30, 40],
//       "price": 450,
//       "category": 4,
//       "rating": 10
//     },
//     {
//       "id": 8,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//       "name": "Четыре сезона",
//       "types": [0, 1],
//       "sizes": [26, 30, 40],
//       "price": 395,
//       "category": 5,
//       "rating": 10
//     },
//     {
//       "id": 9,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
//       "name": "Овощи и грибы 🌱",
//       "types": [0, 1],
//       "sizes": [26, 30, 40],
//       "price": 285,
//       "category": 5,
//       "rating": 7
//     }
//   ]
// }
