import CartContext from "./cart-context";
import { useReducer } from "react";

const initialState = {
    items:[],
    totalAmount:0
}

const reducerFn = ((state,action) => {
    if(action.type === "Add") {
        // console.log(action)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex]

        // console.log(existingCartItem, existingCartItemIndex)

        let updatedItems

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }

        else {updatedItems = state.items.concat(action.item)}
    
        return {
           items: updatedItems,
           totalAmount: updatedTotalAmount
        }
    } 
    if(action.type === "Remove") {
        
        // console.log(action)
        // const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)

        const existingCartItem = state.items[existingCartItemIndex]

        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        let updatedItems

        if (existingCartItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)

        }else{
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount -1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
            
        }
    
        return {
           items: updatedItems,
           totalAmount: updatedTotalAmount
        }
        
    }   
})

const CartProvider = (props) => {

    const [curState,dispatchState] = useReducer(reducerFn,initialState)
   
    const addItemHandler = item => {
        dispatchState({type: "Add" , item:item})
    }

    const removeItemHandler = id => {
        dispatchState({type: "Remove" , id:id})
    }

    const cartContext = {
        items: curState.items,
        totalAmount: curState.totalAmount,
        addItems: addItemHandler,
        removeItems: removeItemHandler   
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider