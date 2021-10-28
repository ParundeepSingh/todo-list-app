import React, { useState } from "react";
import styles from './AddItem.module.css'
import ErrorModal from '../UI/ErrorModal/ErrorModal'
import Button from '../UI/Button/Button'

const AddItem = (props) => {
    const [itemValue, setItemValue] = useState('');
    const [error, setError] = useState('');
    const onAddItem = (event) => {
        event.preventDefault();
        //console.log(itemValue);
        if(itemValue.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid item (non-empty values).'
            });
            return;
        }
        props.addItem(itemValue.trim());
        setItemValue('');
    }

    const itemchangeHandler = (event) => {
        setItemValue(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <div>
            <form onSubmit={onAddItem}>
                <div className="form-group">
                    <input type="text" className="form-control" value={itemValue} onChange={itemchangeHandler} placeholder="Enter new item"></input>
                </div>
                <div className="form-group">
                    <Button type="submit" className={`btn btn-primary ${styles.add_btn}`}>Add Item</Button>
                </div>
            </form>
        </div>
        </React.Fragment>
    );
};

export default AddItem;