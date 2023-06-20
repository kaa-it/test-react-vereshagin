import styles from "./burger-constructor.module.css";
import { CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { useState, useMemo } from 'react';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { ADD_INGREDIENT, SET_BUN, DELETE_INGREDIENT } from "../../services/constructorSlice";
import { INCREASE, DECREASE } from "../../services/ingredientsSlice";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const BurgerConstructor = (props) => {
    const {subClick} = props

    const dispatch = useDispatch()

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop(item){
            if (item.type === 'bun') {
                dispatch(SET_BUN(item))
            }else{
                dispatch(ADD_INGREDIENT(item))
                dispatch(INCREASE(item))
            }
        }
    })

    const [type, setType] = useState()
    const [vis, setVis] = useState(false)

    const burgerData = useSelector(state => state.burgerConstructor)

    const bun = burgerData.bun
    const ingredients = burgerData.ingredients

    const totalPrice = useMemo(() => {
        let inredientsPrice = 0
        ingredients.map(el => inredientsPrice += el.price)
        return   bun.price * 2 + inredientsPrice
    }, [burgerData])

    const [ {isDrag} , ingredientRef] = useDrag({
        type: 'constIngredient',
        item: ingredients,
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        })
    })

    const [, dropInRef] = useDrop({
        accept: 'constIngredient',
        drop(item){
            
        }
    })

    return (
        <form className={styles.content}>
            <ul className={styles.list} ref={dropRef}>
                { ingredients && bun &&
                <DndProvider backend={HTML5Backend}>
                    <div className={styles.right}><ConstructorElement  type="top" isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image_mobile}/></div> 
        
                        <ul className={`${styles.ul} custom-scroll`} ref={dropInRef}>
                            {ingredients.map((el) => {
                                    if (el.type !== "bun"){
                                        return ( //!isDrag && пропадают все элементы, поэтому функции удаления ингредиента при переносе отключена
                                                <div className={styles.card} key={el.unicId} ref={ingredientRef}>
                                                    <div style={{cursor: 'pointer'}} ><DragIcon/></div>
                                                    <ConstructorElement text={el.name} price={el.price} thumbnail={el.image_mobile} handleClose={()=>{
                                                        dispatch(DECREASE(el))
                                                        dispatch(DELETE_INGREDIENT(el.unicId))
                                                        }}/>
                                                </div>
                                                )
                                    } return null
                                })
                            }
                        </ul>

                    <div className={styles.right}><ConstructorElement type="bottom" isLocked={true} text={`${bun.name} (низ)`} price={bun.price} thumbnail={bun.image_mobile}/></div> 
                </DndProvider>
                }
            </ul>
            <div className={`${styles.btnBox} ${styles.right}`}>
                <p className={`text text_type_digits-default ${styles.p}`}>{totalPrice}</p>
                <CurrencyIcon/> 
                <div className={styles.btn}><Button onClick={()=>{
                subClick([bun,...ingredients])
                setVis(true)
            }
                } htmlType="button" type={type} size="medium" onFocus={() => setType('secondary')}>Оформить заказ</Button></div>            
                {vis &&  (<Modal visible={vis} closePopup={() => setVis(false)}><OrderDetails/></Modal>)}
            </div>

        </form>
    );
}

BurgerConstructor.propTypes = {
    subClick: PropTypes.func
}

export default BurgerConstructor;
