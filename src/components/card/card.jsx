import styles from './card.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useState } from 'react';
import { SET_BUN, SET_INGREDIENT } from '../../services/constructorSlice';
import { useDispatch } from 'react-redux';
import { SET_INGREDIENT_DETAILS } from '../../services/ingredientDetailsSlice';

const Card = (props) => {
    const [count, setCount] = useState(null)
    const [modalVisibility, setModalVisibility] = useState(false)

    const dispatch = useDispatch()

    const arr = props.arr

    const plus = () => {
        setCount(count+1)
        dispatch(SET_INGREDIENT(arr))
    }

        return (
            <>
            <div className={styles.container} onClick={() => {
                    if (arr.type === 'bun') {
                        dispatch(SET_BUN(arr))
                        dispatch(SET_INGREDIENT_DETAILS(arr))
                        setModalVisibility(true)
                    }else{
                        dispatch(SET_INGREDIENT_DETAILS(arr))
                        plus()
                        setModalVisibility(true)
                    }
                }}>
                {count > 0 && <Counter size="default" extraClass="m-1" count={count}/>}
                <img className={styles.img} src={arr.image} alt={arr.name}/>
                <div className={`p-1 ${styles.price}`}>
                    <p className='text text_type_digits-default'>{arr.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className='text text_type_main-default'>{arr.name}</p>
            </div>
            {modalVisibility &&  (<Modal visible={modalVisibility} closePopup={() => {
                setModalVisibility(false)
                dispatch(SET_INGREDIENT_DETAILS(null))
                }}><IngredientDetails/></Modal>)}
            </>
        )
}

Card.propTypes = {
    arr: PropTypes.object
}

export default Card