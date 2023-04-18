import React,{useState} from "react";
import Header from "./components/Layout/Header";
import MealSummary from "./components/Meals/MealsSummary";
import AvailableMeal from "./components/Meals/AvailableMeal";
import Cart from "./components/Cart/Cart"; 
import CartProvider from "./store/cart-provider";

function App() {

  const [cartIsShown,setCartShown] = useState(false) 

  const cartShownHandler = () => {
    setCartShown(true)
  }

  const cartHideHandler = () => {
    setCartShown(false)
  }

  return (
    <CartProvider>
      {/* <h2>Let's get started!</h2> */}
      {cartIsShown && <Cart onClose={cartHideHandler}/>}
      <Header onShow={cartShownHandler}/>
      <MealSummary/>
      <AvailableMeal/>
    </CartProvider>
  );
}

export default App;
