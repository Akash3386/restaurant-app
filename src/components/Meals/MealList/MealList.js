import classes from './MealList.module.css'

const MealList = props => {
    return <li className={classes.meal}>
        <div >
            <h3 className={classes.h3}>{props.meal.name}</h3>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>Rs{props.meal.price}</div>
        </div>
    </li>
}

export default MealList