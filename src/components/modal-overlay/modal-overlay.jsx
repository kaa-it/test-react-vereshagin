import styles from './modal-overlay.module.css';

const ModalOverlay = (props) => {
    const visibility =  props.visible ? 'flex' : 'none'
    return (
        <div className={styles.overlay} style={{display: `${visibility}`}} onMouseUp={props.closePopup}>
            {props.children}
        </div>)
}

export default ModalOverlay