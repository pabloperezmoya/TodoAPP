import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { InfoText } from '../InfoText';
import { LoadSkeleton } from '../LoadSkeleton';

function AppUI() {
  const {
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos
  } = React.useContext(TodoContext);
  
  if (loading){
    return (
      <>
        <TodoCounter />
        <TodoSearch />
        <LoadSkeleton value="5"/>
      </>
    )
  }
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {totalTodos > 0 && (
        <TodoList>
          <InfoText/>
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      )}
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
