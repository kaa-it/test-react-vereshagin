import { useRef, useState } from 'react';
import Card from '../card/card';

import style from './card-box.module.css'

const CardBox = (props) => {

    return (
        <li className={style.container}>
            <h3 className='text text_type_main-medium'>{props.text}</h3>
                <div className={style.cardBox}>
                    {props.arr.map((item, i) =>{
                        if (item.type === props.type){
                            return <Card key={i} arr={item}/>
                        }return null
                    })}
                </div>
        </li>

    )
}

export default CardBox