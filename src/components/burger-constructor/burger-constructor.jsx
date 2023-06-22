import styles from "./burger-constructor.module.css";
import { CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from 'react';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";


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

const ingridients = [
    {
        "_id":"60666c42cc7b410027a1a9b9",
        "name":"Соус традиционный галактический",
        "type":"sauce",
        "proteins":42,
        "fat":24,
        "carbohydrates":42,
        "calories":99,
        "price":15,
        "image":"https://code.s3.yandex.net/react/code/sauce-03.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png",
        "__v":0
     },  {
        "_id":"60666c42cc7b410027a1a9b4",
        "name":"Мясо бессмертных моллюсков Protostomia",
        "type":"main",
        "proteins":433,
        "fat":244,
        "carbohydrates":33,
        "calories":420,
        "price":1337,
        "image":"https://code.s3.yandex.net/react/code/meat-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/meat-02-large.png",
        "__v":0
     },  {
        "_id":"60666c42cc7b410027a1a9bc",
        "name":"Плоды Фалленианского дерева",
        "type":"main",
        "proteins":20,
        "fat":5,
        "carbohydrates":55,
        "calories":77,
        "price":874,
        "image":"https://code.s3.yandex.net/react/code/sp_1.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
        "__v":0
     },  {
        "_id":"60666c42cc7b410027a1a9bb",
        "name":"Хрустящие минеральные кольца",
        "type":"main",
        "proteins":808,
        "fat":689,
        "carbohydrates":609,
        "calories":986,
        "price":300,
        "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        "__v":0
     }
]


const BurgerConstructor = () => {
    const [type, setType] = useState()
    return (
        <form className={styles.content}>
            <ul className={styles.list}>
                <div className={styles.right}><ConstructorElement  type="top" isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image_mobile}/></div> 
                
                <ul className={`${styles.ul} custom-scroll`}>
                    {ingridients.map((el) => {
                            if (el.type !== "bun"){
                                return (<div className={styles.card}  key={el._id}>
                                            <DragIcon />
                                            <ConstructorElement text={el.name} price={el.price} thumbnail={el.image_mobile}/>
                                        </div>)
                            } return null
                        })
                    }
                </ul>

                <div className={styles.right}><ConstructorElement type="bottom" isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image_mobile}/></div> 
            </ul>
            <div className={`${styles.btnBox} ${styles.right}`}>
                <p className={`text text_type_digits-default ${styles.p}`}>630</p>
                <CurrencyIcon/> 
                <div className={styles.btn}><Button htmlType="button" type={type} size="medium" onFocus={() => setType('secondary')}>Оформить заказ</Button></div>            
            </div>

        </form>
    );
}

export default BurgerConstructor;