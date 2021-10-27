import styles from './App.module.css';
import React, {useState} from 'react';
import AddItem from './Components/AddItems/AddItem';
import Item from './Components/Item/Item'

function App() {
  const [count, setCount] = useState(5);
  const list = [
    {
      'id':'item-1',
      'value':'Buy some expensive Gadgets'
    },
    {
      'id':'item-2',
      'value':'Explore Different Places'
    }
    ,{
      'id':'item-3',
      'value':'Do something for few people who struggles to afford basic needs'
    }
    ,{
      'id':'item-4',
      'value':'Do Top Few Terrifying Bungee Jumps In The World'
    }
  ];

  const [listitems, addListItem] = useState(list);

  const onAddItemHandler = (item) => { 
    addListItem((prevList) => {
      const newItem = {
        'id' : 'item-'+count,
        'value': item
      };
      setCount((prevCount) => {return prevCount+1});
      return [newItem,...prevList]
    });
  };

  const onDeleteItemHandler = (itemId) => {
    addListItem((prevList) => {
      return prevList.filter((item) => { 
        return item.id !== itemId; 
      });
    });
  };

  return (
    <div className={`container ${styles.todo_cntnr}`}>
      <div className={styles.header}>
        <h1>To-do List</h1>
      </div>

      <AddItem addItem={onAddItemHandler}/>
      {listitems.map((item) => {return <Item key={item.id} value={item} deleteItem={onDeleteItemHandler}/>})}
    </div>
  );
}

export default App;
