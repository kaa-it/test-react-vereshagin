import styles from './modal-overlay.module.css';
import { useEffect, useState } from 'react';

const ModalOverlay = (props) => {
    const [isVisible, setVisivility] = useState(false)
    const closePopup = () => {
        setVisivility(true)
    }
    const escapeClose = (e) => {
        if (e.key === 'Escape'){
            setVisivility(true)
        }
    }
    useEffect(() => {
        document.addEventListener('keypress', escapeClose)
        return () => {
            document.removeEventListener('keypress', escapeClose)
        }
    }, [isVisible])
    const visibility =  props.vis ? 'flex' : 'none'
    return (
        <div className={styles.overlay} style={{display: `${visibility}`}} onMouseUp={closePopup}>
            {props.children}
        </div>)
}

export default ModalOverlay