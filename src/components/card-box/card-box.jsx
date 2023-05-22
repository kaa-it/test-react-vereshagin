import Card from '../card/card';
import PropTypes from 'prop-types';

import styles from './card-box.module.css'

const CardBox = (props) => {
    return (
        <li className={styles.container}>
            <h3 className='text text_type_main-medium'>{props.text}</h3>
                <div className={styles.cardBox}>
                    {props.arr.map((item) =>{
                        if (item.type === props.type){
                            return <Card key={item._id} arr={item}/>
                        }return null
                    })}
                </div>
        </li>
    )
}

CardBox.propTypes = {
    arr: PropTypes.array,
    text: PropTypes.string,
    type: PropTypes.string
}

export default CardBox

