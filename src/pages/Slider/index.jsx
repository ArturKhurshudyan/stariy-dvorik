import React from 'react';
import styles from "./Slider.module.css";
import { useState, useEffect } from 'react';
import slider1 from "../../img/slider/slider1.avif"
import slider2 from "../../img/slider/slider2.avif"
import slider3 from "../../img/slider/slider3.avif"
import slider4 from "../../img/slider/slider4.avif"
import { useSelector } from 'react-redux';


const Slideswhow = ({imgs, ...rest})=> {
    const items = useSelector(state => state.cart.itemsInCart);
    const [index,setIndex] =  useState(0);
    let scrollInterval = null

    // useEffect(() =>{
    //     setIndex(0)
    // },[items])

        useEffect(() => {
            scrollInterval = setTimeout(() => {
                setIndex((index + 1) % imgs.length);
            }, 2000);
            return () => clearTimeout(scrollInterval);
        },[index]);

    const next = () => {
        if(index===imgs.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    // console.log(index);
    const prev = () => {
        if(index===0){
            setIndex(imgs.length-1)
        }else{
            setIndex(index-1)
        }
    }

    return <div className={styles.slideshow}>
                <img className={items.length !== 0 ? styles.mainImg1 : styles.mainImg} alt='img' src={imgs[index]} />
                <div className={styles.actions}>
                    <button className={items.length !== 0 ? styles.buttons : styles.height} onClick={prev}>{"<"}</button>
                    <button className={items.length !== 0 ? styles.buttons1 : styles.height1} onClick={next}>{">"}</button>
                </div>

    </div>
}

function Slider()  {
    const items = useSelector(state => state.cart.itemsInCart);
    
        return (
            <div className={items.length !== 0 ? styles.slider : styles.slider1}>
                <Slideswhow
                    
                    imgs ={[
                        slider1,
                        slider2,
                        slider3,
                        slider4,
                ]}
            />
                
            </div>
        )
    
}

export default Slider
