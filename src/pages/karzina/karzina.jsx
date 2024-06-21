import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./karzina.module.css"
import { addToCart, decrement, deleteItemFromCart } from '../../redux/cart/reducer';
import Reacts from '../mailSend/react';
import { Card } from 'react-bootstrap';

export default function Karzina() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);

    const calcTotalPrice = items => items.reduce((acc,item) => acc + item.itemsQuantiti * item.price, 0)

    const handleRemoveItem = (item) => {
        dispatch(deleteItemFromCart(item))

    }

    const plus = (item) => {
        dispatch(addToCart(item))
    }
    
    const minus = (item) => {
        dispatch(decrement(item))
    }

    return (
    <div className={styles.karzina}>
            {items.length>0 ? <p className={styles.korzina_title}>Корзина</p> : <p className={styles.korzina_title}>Корзина пуста</p>}
            {items.length > 0 ? <div className={styles.relative}>
                
                
                <div className={styles.cart_list}>
                    <div>{items.map(item => (
                        <div className={styles.block} key={item.id}>
                            
                            <Card.Img className={styles.cart_img} src={item.img} />
                            <div className={styles.cart_list_info}>
                                <Card.Title className={styles.cart_title}>{item.title}</Card.Title>
                                

                                <div className={styles.sumPriceblock}>
                                    <p onClick={() => minus(item)}>-</p>
                                    <span>{item.itemsQuantiti}</span>
                                    <p onClick={() => plus(item)}>+</p>
                                </div>
                                <Card.Text className={styles.cart_price}>{item.price * item.itemsQuantiti} ₽</Card.Text>
                                <p className={styles.close_item} 
                                onClick={() => handleRemoveItem(item)}
                            >x</p>
                            </div>
                            
                        </div>
                    ))}</div>
                </div>
                
                
                
                {items.length > 0 ? 
                    <div className={styles.cart_menu_arrange}>
                        <div className={styles.cart_total_price}>
                            <div>
                                <p>Еда։     </p>
                                <p className={styles.allprice}>{calcTotalPrice(items)} руб. </p>
                            </div>
                            <div>
                                <p className={styles.dostavka}>Доставка։ </p>
                                <p className={styles.allprice}>100 руб.</p>
                            </div>
                            
                        </div>
                        <div className={styles.buy}>
                            <p>Итого։ </p>
                            <p className={styles.allprice}>{calcTotalPrice(items) + 100} руб. </p>
                        </div>
                        <p className={styles.zakazat}>Подтвердите заказ</p>
                    </div> : ""}
                    
                    {/* <Reacts /> */}
            </div> : ""}
            

        
    </div>
    
    )
}
