import CartIcon from "../Cart/CartIcon"

import classes from './HeaderButton.module.css'


const HeaderButton = props => {
    return <button className={classes.button} onClick={props.onClicked}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
}

export default HeaderButton