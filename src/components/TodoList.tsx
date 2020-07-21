import React, { useContext } from 'react';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react-lite';

const TodoList = () => {
  const todoStore = useContext(TodoStore);
  const { todos, toggleTodo, removeTodo } = todoStore;
  return (
    <div className="row">
      <div className="nes-table-responsive">
        <table className="nes-table is-bordered" style={{ width: '99%' }}>
          <thead>
            <tr>
              <th style={{ width: '100%' }}>Title</th>
              <th style={{ width: '50%' }}>Completed</th>
              <th style={{ width: '50%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td style={{ textAlign: 'center' }}>
                  {todo.completed && <i className="nes-icon like"></i>}
                </td>
                <td style={{ textAlign: 'right' }}>
                  <button
                    className="nes-btn is-primary"
                    onClick={(_) => toggleTodo(todo.id!)}
                  >
                    Toggle
                  </button>
                  <button
                    className="nes-btn is-error"
                    onClick={(_) => removeTodo(todo.id!)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default observer(TodoList);
