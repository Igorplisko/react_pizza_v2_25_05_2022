import React from 'react';
import PizzaBlock from './components/PizzaBlock';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';

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
            <PizzaBlock title="somthing" price={600} />
            <PizzaBlock title="somthing" price={600} />
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
