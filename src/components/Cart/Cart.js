import React from 'react';
import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = props => {

    const cart = useContext(CartContext)

    const hasItem = cart.items.length>0;

    const removeItemToCartHandler = (id) => {
        console.log(id)
        cart.removeItems(id)
    }

    const addItemTOCartHandler = (item) => {
        cart.addItems(item)
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cart.items.map((item) => 
            (
            <React.Fragment key={item.id}>
            
                <li key={item.id} style={{display:"flex", justifyContent:"space-between", margin:"0.50rem",paddingBottom:"0.50rem",borderBottom:"2px solid #8a2b06"}} >
                    <div>
                        <h3 style={{margin:"0 0 0.25rem 0"}}>{item.name}</h3>
                        <div style={{marginTop:"0.25rem",fontWeight:"Bold",color:"red",fontSize:"1rem"}}>Rs {item.price}
                             <button style={{margin:"1rem"}}>X {item.amount}</button>
                        </div>
                    </div>
                    <div>
                      <button onClick={removeItemToCartHandler.bind(null,item.id)}>-</button>
                      <button onClick={addItemTOCartHandler.bind(null,item)}>+</button>
                    </div>
                    
                </li>
            
            </React.Fragment>  
            
        
            )
            
        )}
        </ul>;

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total</span>
            <span>{cart.totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            {hasItem && <button className={classes.button}>Order</button>}
        </div>
        <div></div>
    </Modal>
    )
}

export default Cart