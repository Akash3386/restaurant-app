import MealItemInput from './MealItemInput'
import classes from './Mealtem.module.css'

const MealItem = props => {
    return <li className={classes.meal}>
        <div >
            <h3 className={classes.h3}>{props.meal.name}</h3>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>Rs{props.meal.price}</div>
        </div>
        <div>
            <MealItemInput/>
        </div>
    </li>
}

export default MealItem