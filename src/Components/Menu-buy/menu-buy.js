import React from 'react'
import styles from "./menu-buy.module.css"
import Button from '../button/button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, addToCart } from '../../redux/cart/reducer';

export default function MenuBuy({menu}) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === menu.id)
    const handleClick = (e) => {
        e.stopPropagation();
        // console.log(isItemInCart);
            if(!isItemInCart){
                dispatch(addToCart(menu));
            }else{
                return null
            }
            
        
}

    return (
        <div className={styles.menu_buy}>
            <Button 
                type= {isItemInCart ? "primary" : "secondary"}
                onClick={handleClick}
            >
                {isItemInCart ? "Добавлен" : "В корзину"}
            </Button>
        </div>
    )
}
