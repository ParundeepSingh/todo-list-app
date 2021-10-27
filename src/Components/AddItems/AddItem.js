import { useState } from "react";
import styles from './AddItem.module.css'

const AddItem = (props) => {
    const [itemValue, setItemValue] = useState('');
    const onAddItem = (event) => {
        event.preventDefault();
        //console.log(itemValue);
        props.addItem(itemValue);
        setItemValue('');
    }

    const itemchangeHandler = (event) => {
        setItemValue(event.target.value);
    }

    return (
        <div>
            <form onSubmit={onAddItem}>
                <div className="form-group">
                    <input type="text" className="form-control" value={itemValue} onChange={itemchangeHandler} placeholder="Enter new item"></input>
                </div>
                <div className="form-group">
                    <button type="submit" disabled={itemValue.length == 0} className={`btn btn-primary ${styles.add_btn}`}>Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;