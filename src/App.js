import React from 'react';
import PizzaBlock from './components/PizzaBlock';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import pizzas from './assets/pizzas.json';

import './scss/app.scss';

console.log(pizzas);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock
                key={obj.index}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes= {obj.sizes}
                types= {obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
