import Card from 'react-bootstrap/Card';
import styles from "./cart-menu.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteItemFromCart, decrement} from '../../redux/cart/reducer';
import { NavLink } from 'react-bootstrap';






export default function CartMenu() {
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
    <div className={items.length === 0 ? styles.none : styles.cart}>
        <div className={styles.fix}>
            <div className={styles.relative}>
                <p className={styles.korzina}>Корзина</p>

                <div className={styles.cart_list}>
                    <div>{items?.map(item => (
                        <div className={styles.block} key={item.id}>
                            <p className={styles.close_item} 
                                onClick={() => handleRemoveItem(item)}
                            >x</p>
                            <Card.Img className={styles.cart_img} src={item.img} />
                            <div className={styles.cart_list_info}>
                                <Card.Title className={styles.cart_title}>{item.title}</Card.Title>
                                <Card.Text className={styles.cart_price}>{item.price * item.itemsQuantiti} ₽</Card.Text>

                                <div className={styles.sumPriceblock}>
                                    <p onClick={() => minus(item)}>-</p>
                                    <span>{item.itemsQuantiti}</span>
                                    <p onClick={() => plus(item)}>+</p>
                                </div>
                            
                            </div>
                        </div>
                    ))}</div>
                </div>
                <div className={styles.cart_menu_arrange}>
                    <div className={styles.cart_total_price}>
                        <p>Итого։     </p>
                        <p>{calcTotalPrice(items)} руб.</p>
                    </div>
                    <NavLink  exact="true" to={"karzina"}>
                    <p className={styles.zakazat}>Заказать</p>
                    </NavLink>
                </div>
            </div>
            
            

        </div>
        
        

    </div>
    )
}
