import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import CardBox from '../card-box/card-box';


import styles from './burger-ingredients.module.css'

const BurgerIngredients = () => {
    const [current, setCurrent] =  useState('one')

    return (
        <div className={styles.content}>
            <h2 className={`text text_type_main-large ${styles.title}`}>Соберите бургер</h2>
            <div className={styles.tabs}>
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
            <ul className={`${styles.container} custom-scroll`}>
                <CardBox type="bun" text='Булки'/>
                <CardBox type="sauce" text='Соусы'/>
                <CardBox type="main" text='Начинки'/>
            </ul>

        </div>
    )
}

export default BurgerIngredients