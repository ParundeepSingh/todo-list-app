import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={`${styles.card_box} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;