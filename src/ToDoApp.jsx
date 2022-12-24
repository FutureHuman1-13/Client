import { useState } from 'react';
import './todo.css';
import ToDoList from './ToDoList';
import AddIcon from '@mui/icons-material/Add';
//only you have to import ToDoApp in App.js.

const ToDoApp = () => {
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("deleted!");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return (index !== id);
      })
    })

  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}>
            <AddIcon />
          </button>
          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default ToDoApp;
