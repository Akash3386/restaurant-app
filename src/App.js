import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealSummary from "./components/Meals/MealsSummary";
import AvailableMeal from "./components/Meals/AvailableMeal";

function App() {
  return (
    <Fragment>
      {/* <h2>Let's get started!</h2> */}
      <Header/>
      <MealSummary/>
      <AvailableMeal/>
    </Fragment>
  );
}

export default App;
