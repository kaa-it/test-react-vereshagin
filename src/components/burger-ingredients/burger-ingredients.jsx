import { useRef, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import CardBox from '../card-box/card-box';

import style from './burger-ingredients.module.css'

let array = []

const BurgerIngredients = (props) => {
    const [current, setCurrent] =  useState('one')

    return (
        <div className={style.content}>
            <h2 className='text text_type_main-large' style={{paddingTop: '40px'}}>Соберите бургер</h2>
            <div style={{ display: 'flex', width: '100%'}}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки 
                </Tab>
            </div>
            <ul className={`${style.container} custom-scroll`} style={{overflowY: 'scroll', msOverflowX: 'hidden'}}>
                <CardBox arr={props.arr} type="bun" text='Булки'/>
                <CardBox arr={props.arr} type="sauce" text='Соусы'/>
                <CardBox arr={props.arr}  type="main" text='Начинки'/>
            </ul>

        </div>
    )
}

export default BurgerIngredients