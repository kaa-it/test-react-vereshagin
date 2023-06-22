import styles from './order-details.module.css';
import done from '../../images/done.jpg'
import { OrderContext } from '../../services/OrderContext';
import { useContext } from 'react';

const OrderDetails = () => {
    const {order} = useContext(OrderContext)
    return (
            <>
                <h2 className={`text_type_digits-large ${styles.id}`}>{order}</h2>
                <h3 className="text text_type_main-medium">идентификатор заказа</h3>
                <img className={styles.img} src={done}/>
                <p className="text text_type_main-small">Ваш заказ начали готовить</p>
                <p className={`text_type_main-small text_color_inactive ${styles.wait}`}>Дождитесь готовности на орбитальной станции</p>
            </>
        )
}

export default OrderDetails