import styles from "./burger-constructor.module.css";
import { CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { useEffect, useState } from 'react';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details"
import PropTypes from 'prop-types';;



{/*Массивы вспомогательные*/}
const bun = {
        "_id":"60666c42cc7b410027a1a9b1",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v":0
     }

const BurgerConstructor = (props) => {
    const [type, setType] = useState()
    const [order, setOrder] = useState(false)

    return (
        <form className={styles.content}>
            <ul className={styles.list}>
                <div className={styles.right}><ConstructorElement  type="top" isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image_mobile}/></div> 
                
                <ul className={`${styles.ul} custom-scroll`}>
                    {props.arr.map((el) => {
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
            </ul>
            <div className={`${styles.btnBox} ${styles.right}`}>
                <p className={`text text_type_digits-default ${styles.p}`}>630</p>
                <CurrencyIcon/> 
                <div className={styles.btn}><Button onClick={()=> setOrder(true)} htmlType="button" type={type} size="medium" onFocus={() => setType('secondary')}>Оформить заказ</Button></div>            
                {order &&  (<Modal visible={order} closePopup={() => setOrder(false)}><OrderDetails/></Modal>)}
            </div>

        </form>
    );
}

BurgerConstructor.propTypes = {
    arr: PropTypes.array
}

export default BurgerConstructor;
