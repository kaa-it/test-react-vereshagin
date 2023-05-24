import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    const visibility =  props.visible ? 'flex' : 'none'
    return (
        <div className={styles.overlay} style={{display: `${visibility}`}} onMouseUp={props.closePopup}>
            {props.children}
        </div>)
}

ModalOverlay.propTypes = {
    visible: PropTypes.bool,
    closePopup: PropTypes.func
}

export default ModalOverlay