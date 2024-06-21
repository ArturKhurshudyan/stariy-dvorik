import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from "./header.module.css"

export default function Header() {
    const items = useSelector(state => state.cart.itemsInCart);
    
    const calcTotalPrice = items => items.reduce((acc,item) => acc + item.itemsQuantiti, 0)

    return (
    <header className={items.length===0 ? styles.header1 : styles.header1}>
        <div className={items.length===0 ? styles.wrapper : styles.wrapper}>
            <div className={styles.logo}>
                <Link to="/" > El & Arm</Link>
            </div>
            <div className={styles.nav}>
                    <p>О нас</p>
                    <p>Контакти</p>
                    
                    <div className={styles.shop_button}>
                        <NavLink  exact="true"  to={"karzina"}>
                            <FaShoppingCart className={styles.karzina_icon}/>
                        </NavLink>
                        <div className={styles.shop_button_item}>
                            {calcTotalPrice(items)}
                        </div>
                    </div>
                    
                        
                    
            </div>
        </div>
        
        
    </header>
    )
}
