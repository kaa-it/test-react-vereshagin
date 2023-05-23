import styles from './order-details.module.css';
import done from '../../images/done.jpg'
import Modal from '../modal/modal';

const OrderDetails = () => {
    return (
            <Modal>
                <h2 className={`text_type_digits-large ${styles.id}`}>034536</h2>
                <h3 className="text text_type_main-medium">идентификатор заказа</h3>
                <img className={styles.img} src={done}/>
                <p className="text text_type_main-small">Ваш заказ начали готовить</p>
                <p className={`text_type_main-small text_color_inactive ${styles.wait}`}>Дождитесь готовности на орбитальной станции</p>
            </Modal>
        )
}

export default OrderDetails