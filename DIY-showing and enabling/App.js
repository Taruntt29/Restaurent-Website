import { useState } from 'react';
import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';
function App() {
  const [showCart, setShowCart] = useState(false)
const showCartHandler = ()=>{
  
    setShowCart(true)
}
const hideCartHandler = ()=>{
  setShowCart(false)

}
const removeItem = (item,id)=>{
  console.log('Nothing is impossible')
}

  return (
    <CartProvider>
      {showCart && <Cart onClose = {hideCartHandler}></Cart>}
      {showCart && <Cart onClose = {hideCartHandler} ></Cart>}
      <Header onCartClick={showCartHandler} />
      <MealsSummary/>
      <AvailableMeals/>
      <AvailableMeals />

    </CartProvider>
  );
}
export default App;