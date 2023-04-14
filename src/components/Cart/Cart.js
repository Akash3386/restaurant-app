import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'C1',name: 'sushi',amount:'2',price: '200'}
].map((item) => <li>{item.name}</li>)}</ul>;

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>500</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
        <div></div>
    </Modal>
    )
}


export default Cart