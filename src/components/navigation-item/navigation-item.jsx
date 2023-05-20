import navStyles from './navigation-item.module.css';

const NavigationItem = (props) => {
    return (
        <div className={navStyles.container}>
            {props.children}
            <a style={{textDecoration: 'none', appearance: 'none'}} className={props.class}  href='#'>{props.text}</a>
        </div>
    )
}

export default NavigationItem