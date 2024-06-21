import React from "react";
import MENU from "../../Menu"
import { useSelector } from "react-redux";
import styles from "./main.module.css"
import CartMenu from "../../Components/cart-menu/cart-menu";
import { NavLink, Outlet } from "react-router-dom";
import Slider from "../Slider";
import povr from "../../img/povr.png"
import dostavchik from "../../img/dastavchik.png"
import Modul from "../modul/modul";




export default function Main() {

  
  const items = useSelector(state => state.cart.itemsInCart);
  
  
  return (
    <main>
      <Modul />
      <div className={items.length===0 ? styles.main_div1 : styles.main_div2}>
      
        <div className={items.length===0 ? styles.presentation : styles.presentation1}>
            <div className={styles.povr}>
              <img src={povr} />
              
            </div>
            <Slider />
            <div className={styles.dostavchik}>
              <img src={dostavchik} />
            </div>
        </div>
        <div className={styles.nav}>
        
                <NavLink  exact="true"  to={"/"} className={({isActive}) => (isActive ? styles.activ : styles.noactiv)} >
                    Все блюди
                </NavLink>
                <NavLink exact="true"  to={"shashlik"} className={({isActive}) => (isActive ? styles.activ : styles.noactiv)} > 
                    Шашлыки
                </NavLink>
                <NavLink exact="true"  to={'sup'} className={({isActive}) => (isActive ? styles.activ : styles.noactiv)}  > 
                    Горячие блюда
                </NavLink>
                <NavLink exact="true"  to={'salat'} className={({isActive}) => (isActive ? styles.activ : styles.noactiv)}  > 
                    Салати
                </NavLink>
                
                
        </div>
        <div className={styles.main_menu}>
          <Outlet></Outlet>
        </div>
        
      </div>
      
          {MENU?.map(menu => <CartMenu menu={menu} key={menu.id}/>)}
      
      
      
      
      
    </main>
    )
}
