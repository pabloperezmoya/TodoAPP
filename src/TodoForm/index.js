import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const onChange = (event) =>{
    setNewTodoValue(event.target.value)
  }

  const onCancel = ()=>{
    setOpenModal(false);
  }

  const [buttonError, setButtonError ] = React.useState(false);

  const onSubmit = (event) =>{
    event.preventDefault();
    
    if (newTodoValue.length > 0){
      addTodo(newTodoValue);
      setOpenModal(false);
    }else{
      setButtonError(true);

    }
  }
    const checkButton = ()=>{
      if (newTodoValue.length === 0){
        setButtonError(true);
      }else{
        setButtonError(false);
      }
    }


  return(
    <form onSubmit={onSubmit} className="modalForm">
      <textarea className='modalTextArea'
        value={newTodoValue} 
        onChange={onChange} 
        placeholder='Comprar naranjas🍊'/>
      
      <div className='buttonContainer--modal'>
        <button className="cancelTodo" type="button" onClick={onCancel}>
          <i className="modalIcon fa-solid fa-xmark"></i>
        </button>
        {!buttonError && (
          <button onMouseEnter={checkButton} className="addTodo" type="submit">
            <i className="modalIcon fa-solid fa-check completed"></i>
          </button>
        )}
        {buttonError && (
          <button onMouseEnter={checkButton} className="cancelTodo">
            <i className="modalIcon fa-solid fa-check completed"></i>
          </button>
        )}

      </div>
    </form>
  )
}

export { TodoForm };