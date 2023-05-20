import styles from "./burger-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../card/card";
import { useEffect, useState } from 'react';


{/*Массив вспомогательный*/}
const arr = {
    "_id":"60666c42cc7b410027a1a9b2",
    "name":"Флюоресцентная булка R2-D3",
    "type":"bun",
    "proteins":44,
    "fat":26,
    "carbohydrates":85,
    "calories":643,
    "price":988,
    "image":"https://code.s3.yandex.net/react/code/bun-01.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
    "__v":0
 }

const BurgerConstructor = (props) => {
    const [type, setType] = useState()
    return (
        <form className={styles.content}>
            <ul className={`${styles.ul} custom-scroll`} style={{overflowY: 'scroll', msOverflowX: 'hidden'}}>
                <Card arr={arr} isBurgerConstructor={true} drag={arr.type !== "bun"} lock={arr.type === "bun"} text='(верх)' /> 
                {props.arr.map((el,i) => {
                        if (el.type !== "bun"){
                            return (<Card arr={el} isBurgerConstructor={true} drag={el.type !== "bun"} lock={el.type === "bun"} key={i}/>)
                        } return null
                    })
                }
                <Card arr={arr} isBurgerConstructor={true} drag={arr.type !== "bun"} lock={arr.type === "bun"} text='(низ)'/> 
            </ul>
            <div className={styles.btnBox}>
                <p className="text text_type_digits-default" style={{marginRight: '9.5px'}}>630</p>
                <CurrencyIcon/> 
                <Button style={{marginLeft: '40px'}} htmlType="button" type={type} size="medium" onFocus={() => setType('secondary')}>Оформить заказ</Button>            
            </div>

        </form>
    );
}

export default BurgerConstructor;
