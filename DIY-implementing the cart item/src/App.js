import { Fragment, useState } from 'react';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';
function App() {
  const [showCart, setShowCart] = useState(false)

const doThis = ()=>{
const showCartHandler = ()=>{

    setShowCart(true)

}
const closeTheModal = ()=>{
const hideCartHandler = ()=>{
  setShowCart(false)

}
  return (
    <Fragment>
      {showCart && <Cart CloseCart = {closeTheModal}></Cart>}
      <Header onCartClick={doThis} />
    <CartProvider>
      {showCart && <Cart onClose = {hideCartHandler}></Cart>}
      <Header onCartClick={showCartHandler} />
      <MealsSummary/>
      <AvailableMeals/>

    </Fragment>
    </CartProvider>
  );
}

export default App;
export default App;