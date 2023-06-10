import styles from "./burger-constructor.module.css";
import { CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { useState, useContext } from 'react';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details"
import { ConstructorContext } from "../../services/ConstructorContext";
import { BunContext } from "../../services/BunContext";
import { PriceContext } from "../../services/PriceContext";

const BurgerConstructor = () => {
    const [type, setType] = useState()
    const [order, setOrder] = useState(false)
    const {list} = useContext(ConstructorContext)
    const {bun} = useContext(BunContext)
    const {price} = useContext(PriceContext)

    return (
        <form className={styles.content}>
            <ul className={styles.list}>
                { list &&
                <>
                    <div className={styles.right}><ConstructorElement  type="top" isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image_mobile}/></div> 
                    
                    <ul className={`${styles.ul} custom-scroll`}>
                        {list.map((el) => {
                                if (el.type !== "bun"){
                                    return (
                                            <div className={styles.card} key={el._id}>
                                                <div style={{cursor: 'pointer'}}><DragIcon/></div>
                                                <ConstructorElement text={el.name} price={el.price} thumbnail={el.image_mobile}/>
                                            </div>
                                            )
                                } return null
                            })
                        }
                    </ul>

                    <div className={styles.right}><ConstructorElement type="bottom" isLocked={true} text={`${bun.name} (низ)`} price={bun.price} thumbnail={bun.image_mobile}/></div> 
                </>
                }
            </ul>
            <div className={`${styles.btnBox} ${styles.right}`}>
                <p className={`text text_type_digits-default ${styles.p}`}>{price}</p>
                <CurrencyIcon/> 
                <div className={styles.btn}><Button onClick={()=> setOrder(true)} htmlType="button" type={type} size="medium" onFocus={() => setType('secondary')}>Оформить заказ</Button></div>            
                {order &&  (<Modal visible={order} closePopup={() => setOrder(false)}><OrderDetails/></Modal>)}
            </div>

        </form>
    );
}

export default BurgerConstructor;
