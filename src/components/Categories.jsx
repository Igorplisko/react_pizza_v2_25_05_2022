import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    'All',
    'Meat',
    'Vegetarian',
    'Grecise',
    'Sharp',
    'Closed',
  ];

  const onClickCategory = (activeIndex) => {
    setActiveIndex(activeIndex);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
         
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>

    // start 11.11.2022
     // start 17.11.2022
  );
}

export default Categories;

{
  /* <li
onClick={() => onClickCategory(activeIndex)}
className={activeIndex === 0 ? 'active' : ''}
>
All
</li> */
}
// <li
// onClick={() => onClickCategory(activeIndex)}
// className={activeIndex === 1 ? 'active' : ''}
// >
// Meat
// </li>
// <li
// onClick={() => onClickCategory(activeIndex)}
// className={activeIndex === 2 ? 'active' : ''}
// >
// Vegetarian
// </li>
// <li
// onClick={() => onClickCategory(3)}
// className={activeIndex === 3 ? 'active' : ''}
// >
// Grensive
// </li>
// <li
// onClick={() => onClickCategory(4)}
// className={activeIndex === 4 ? 'active' : ''}
// >
// Sharp
// </li>
// <li
// onClick={() => onClickCategory(5)}
// className={activeIndex === 5 ? 'active' : ''}
// >
// Closed
// </li>
