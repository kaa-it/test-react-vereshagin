import styles from './card.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { useEffect, useState } from 'react';

const Card = (props) => {
    const [count, setCount] = useState(null)
    const [modalVisibility, setModalVisibility] = useState(false)

    const plus = () => {
        setCount(count+1)
    }
    
    const arr = props.arr
        return (
            <>
            <div className={styles.container} onClick={() => {
                    plus()
                    setModalVisibility(true)
                }}>
                {count > 0 && <Counter size="default" extraClass="m-1" count={count}/>}
                <img className={styles.img} src={arr.image} alt={arr.name}/>
                <div className={`p-1 ${styles.price}`}>
                    <p className='text text_type_digits-default'>{arr.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className='text text_type_main-default'>{arr.name}</p>
            </div>
            {modalVisibility &&  (<Modal visible={modalVisibility} closePopup={() => setModalVisibility(false)}><IngredientDetails arr={arr}/></Modal>)}
            </>
        )
}

Card.propTypes = {
    arr: PropTypes.object
}

export default Card