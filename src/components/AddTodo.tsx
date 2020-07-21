import React, { useContext, useState } from 'react';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react-lite';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const todoStore = useContext(TodoStore);
  const { addTodo } = todoStore;

  return (
    <div className="row">
      <div className="nes-field is-inline col">
        <label htmlFor="todo_input">Todo :</label>
        <input
          type="text"
          id="todo_input"
          className="nes-input"
          value={title}
          placeholder="Todo title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="nes-btn is-success"
        onClick={(_) => {
          addTodo({
            title: title,
            completed: false,
          });
          setTitle('');
        }}
      >
        + Add Todo
      </button>
    </div>
  );
};

export default observer(AddTodo);
