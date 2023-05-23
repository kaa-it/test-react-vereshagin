import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useEffect, useState } from 'react';

const Modal = (props) => {
    const [isVisible, setVisivility] = useState(false)
    const closePopup = () => {
        setVisivility(true)
    }
    return (
        <ModalOverlay vis={isVisible}>
            <div className={styles.popup}>
                <div className={styles.close} onMouseUp={closePopup}><CloseIcon /></div>
                {props.children}
            </div>
        </ModalOverlay>
    )
}

export default Modal