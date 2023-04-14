import React,{useState} from "react";
import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealSummary from "./components/Meals/MealsSummary";
import AvailableMeal from "./components/Meals/AvailableMeal";
import Cart from "./components/Cart/Cart"; 

function App() {

  const [cartIsShown,setCartShown] = useState(false) 

  const cartShownHandler = () => {
    setCartShown(true)
  }

  const cartHideHandler = () => {
    setCartShown(false)
  }

  return (
    <Fragment>
      {/* <h2>Let's get started!</h2> */}
      {cartIsShown && <Cart onClose={cartHideHandler}/>}
      <Header onShow={cartShownHandler}/>
      <MealSummary/>
      <AvailableMeal/>
    </Fragment>
  );
}

export default App;
