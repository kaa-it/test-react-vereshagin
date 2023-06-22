import styles from "./constructor-card.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from 'react';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { DELETE_INGREDIENT } from "../../services/constructorSlice";
import { DECREASE } from "../../services/ingredientsSlice";


const ConstructorCard = (props) => {
    const {el, index, moveCard} = props

    const ingredients = useSelector(state => state.burgerConstructor.ingredients)
    
    const dispatch = useDispatch()
    const ref = useRef(null)
    const [, drop] = useDrop({
      accept: 'swapedCard',
      hover(item) {
        moveCard(index ,item.index)
      }
    })
    const [{ isDragging }, drag] = useDrag({
      type: 'swapedCard',
      item: () => {
        return {index: ingredients.indexOf(el)}
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })

    drag(drop(ref))

    return (!isDragging &&
        <div className={styles.card} key={el.unicId} ref={ref}>
            <div style={{cursor: 'pointer'}} ><DragIcon/></div>
            <ConstructorElement text={el.name} price={el.price} thumbnail={el.image_mobile} handleClose={()=>{
                dispatch(DECREASE(el))
                dispatch(DELETE_INGREDIENT(el.unicId))
                }}/>
        </div>
    );
}

export default ConstructorCard;
