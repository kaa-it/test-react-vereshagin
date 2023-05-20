import styles from './card.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useEffect, useState } from 'react';

const Card = (props) => {
    const [count, setCount] = useState(null)
    const plus = () => {
        setCount(count+1)
    }
    
    const isBurgerConstructor = props.isBurgerConstructor

    if (isBurgerConstructor) {
        return (
            <div className={styles.box}>
                {props.drag ? <DragIcon /> : <div style={{minWidth:'24px'}}></div>}
                <img style={{marginLeft: '12px'}} src={props.arr.image_mobile}/>
                <p className='text text_type_main-small'>{props.arr.name + props.text}</p>
                <div className={styles.price}>
                    <p className='text text_type_digits-default'>{props.arr.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                {props.lock ? <LockIcon type='secondary'/> : <DeleteIcon />}
            </div>
        )
    }
        return (
            <div className={styles.container} onClick={plus}>
                {count > 0 && <Counter size="default" extraClass="m-1" count={count}/>}
                <img className={styles.img} src={props.arr.image}/>
                <div className={`p-1 ${styles.price}`}>
                    <p className='text text_type_digits-default'>{props.arr.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className='text text_type_main-default'>{props.arr.name}</p>
            </div>
        )
}

Card.defaultProps = {
    text: '',
    isBurgerConstructor: false
}

export default Card