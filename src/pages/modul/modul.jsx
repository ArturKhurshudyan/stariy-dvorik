import React from 'react'
import styles from "./modul.module.css"
import {  useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { deleteModule } from '../../redux/cart/reducer';


export default function Modul() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.itemsInCart);
  const items = useSelector(state => state.cart.module);

  const handleRemoveItem1 = (item) => {

    dispatch(deleteModule(item))

}
  
  

  return (
    <>
      
      {items?.map(item => (
        <>
          <div className={cart.length === 0 ? styles.modul : styles.modul1} key={item.id}>
            <div className={styles.modul_div}>
                              <span className={styles.close_item} 
                                  onClick={() => handleRemoveItem1(item)}
                              >x</span>
                              <Card.Title className={styles.cart_title}>{item.title}</Card.Title>
                              <Card.Img className={styles.cart_img} src={item.img} />
                              <Card.Text className={styles.cart_price}>{item.text} </Card.Text>

                              
                              
            </div>
          </div>
          
        </>
                
                
        ))
      }
    </>
  )
}
