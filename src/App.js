import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <Fragment>
      {/* <h2>Let's get started!</h2> */}
      <Header/>
      <MealSummary/>
    </Fragment>
  );
}

export default App;
