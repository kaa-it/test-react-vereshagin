import Card from '../card/card';
import PropTypes from 'prop-types';
import { BurgerContext } from '../../services/BurgerContext';
import { useContext } from 'react'; 

import styles from './card-box.module.css'

const CardBox = (props) => {
    const {apidata} = useContext(BurgerContext)
    const {text, type} = props

    return (
        <li className={styles.container}>
            <h3 className='text text_type_main-medium'>{text}</h3>
                <div className={styles.cardBox}>
                    {apidata.data.map(item =>{
                        if (item.type === type){
                            return <Card key={item._id} arr={item}/>
                        }return null
                    })}
                </div>
        </li>
    )
}

CardBox.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
}

export default CardBox

