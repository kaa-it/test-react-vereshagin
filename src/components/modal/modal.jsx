import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useEffect, useState } from 'react';

const Modal = (props) => {
    return (
        <ModalOverlay visible={props.visible} closePopup={props.closePopup}>
            <div className={styles.popup}>
                <div className={styles.close} onClick={props.closePopup}><CloseIcon /></div>
                {props.children}
            </div>
        </ModalOverlay>
    )
}

export default Modal