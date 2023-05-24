import styles from './ingredient-details.module.css';
import Modal from '../modal/modal';
import PropTypes from 'prop-types';

const nutritionText = `text text_type_main-default text_color_inactive`

const IngredientDetails = (props) => {
    const arr = props.arr
    return (
            <Modal visible={props.visible} closePopup={props.closePopup}>
                <h2 className={`text text_type_main-large ${styles.title}`}>Детали ингредиента</h2>
                <img src={arr.image_large} alt={arr.name} className={styles.img}/>
                <h3 className="text text_type_main-medium">{arr.name}</h3>
                <ul className={styles.nutritions}>
                    <li className={nutritionText}>{`Калории,ккал ${arr.calories}`}</li> 
                    <li className={nutritionText}>{`Белки, г ${arr.proteins}`}</li>
                    <li className={nutritionText}>{`Жиры, г ${arr.fat}`}</li>
                    <li className={nutritionText}>{`Углеводы, г ${arr.carbohydrates}`}</li>
                </ul>
            </Modal>)
        
}

IngredientDetails.propTypes = {
    arr: PropTypes.array,
    visible: PropTypes.bool,
    closePopup: PropTypes.func
}

export default IngredientDetails