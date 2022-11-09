import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(3);
  const onClickCategory = () => {
    setActiveIndex(3);
  };
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        <li>Meat</li>
        <li>Vegetarian</li>
        <li
          onClick={() => onClickCategory}
          className={activeIndex === 3 ? 'active' : ''}
        >
          Grensive
        </li>
        <li>Sharp</li>
        <li>Closed</li>
      </ul>
    </div>

    // start 11.11.2022
  );
}

export default Categories;
