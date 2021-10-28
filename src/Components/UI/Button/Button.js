
import classes from './Button.module.css';

const Button = (props) =>{
    return (
        <input
        className={classes.button}
        type={props.type || 'button'}
        onClick={props.onClick}
        value={props.children}
        />
    );
}

export default Button;