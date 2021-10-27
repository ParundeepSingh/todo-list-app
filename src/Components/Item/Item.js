import styles from './Item.module.css';

const Item = (props) => {

    const onClickHandler = (event) => {
        event.preventDefault();
        props.deleteItem(props.value.id);
    };

    return (
        <div onClick={onClickHandler} className={styles.box_margin}>
            <p className={styles.text}>{props.value.value}</p>
        </div>
    );
}

export default Item;