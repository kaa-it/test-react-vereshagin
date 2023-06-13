import styles from "./burger-constructor.module.css";
import { CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { useState, useContext } from 'react';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details"
import { BunContext } from "../../services/BunContext";
import { PriceContext } from "../../services/PriceContext";
import PropTypes from 'prop-types';
import constructorSlice from "../../services/constructorSlice";
import { useSelector } from "react-redux";

const BurgerConstructor = (props) => {
    const {subClick} = props

    const [type, setType] = useState()
    const [vis, setVis] = useState(false)
    const {bun} = useContext(BunContext)
    const {price} = useContext(PriceContext)

    const list = useSelector(state => state.list)
    console.log(list)
    

    return (
        <form className={styles.content}>
            <ul className={styles.list}>
                { list &&
                <>
                    <div className={styles.right}><ConstructorElement  type="top" isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image_mobile}/></div> 
                    
                    <ul className={`${styles.ul} custom-scroll`}>
                        {list.map((el) => {
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
                </>
                }
            </ul>
            <div className={`${styles.btnBox} ${styles.right}`}>
                <p className={`text text_type_digits-default ${styles.p}`}>{price}</p>
                <CurrencyIcon/> 
                <div className={styles.btn}><Button onClick={()=>{
                subClick(list)
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
