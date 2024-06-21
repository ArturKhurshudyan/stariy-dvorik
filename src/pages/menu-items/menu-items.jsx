import React from 'react'
import Card from 'react-bootstrap/Card';
import MenuBuy from '../../Components/Menu-buy/menu-buy';
import styles from "./menu-items.module.css"
import { useDispatch } from 'react-redux';
import { addModule} from '../../redux/cart/reducer';

export default function MenuItems({menu,index}) {
  const dispatch = useDispatch();
  const handleClick1 = (e) => {
      e.stopPropagation();
      
          
              dispatch(addModule(menu));
          
          
      
}
  return (
    <>
        <Card key={index} className = {styles.item} >
                    <Card.Img src = {menu.img}/>
                    <div className={styles.flex}>
                      <Card.Title className = {styles.title} > {menu.title} </Card.Title>
                      <Card.Text className={styles.cart_price}>{menu.price} ₽</Card.Text>
                    </div>
                    
                    <Card.Text className = {styles.itemzoom} onClick={handleClick1} > Узнать больше </Card.Text> 
                    
                    <MenuBuy menu = {menu}/>
                    


        </Card>
        
        
    </>
        
    
  )
}
