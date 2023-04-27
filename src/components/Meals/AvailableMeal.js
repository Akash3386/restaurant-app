import classes from './AvailableMeal.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const dummyMeal = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'finest fish and veggies',
        price: '100'
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german speciality',
        price: '200'
    },
    {
        id: 'm3',
        name: 'Barbique Burger',
        description: 'Ameriacn,raw,meaty',
        price: '150'
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy.. and green',
        price: '250'
    }
]


const AvailableMeal = () => {
    const mealList = dummyMeal.map((meal) => (
        <MealItem 
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />))

    return <section className={classes.meals}>
        <Card>
            <ul>{mealList}</ul>
        </Card>
    </section>
}


export default AvailableMeal