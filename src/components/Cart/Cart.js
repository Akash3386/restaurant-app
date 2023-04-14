import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = Props => {
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'C1',name: 'sushi',amount:'2',price: '200'}
].map((item) => <li>{item.name}</li>)}</ul>;

    return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>500</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
        <div></div>
    </Modal>
    )
}


export default Cart