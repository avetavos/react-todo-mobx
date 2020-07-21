import React, { useEffect, useContext } from 'react';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react-lite';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todos = () => {
  const todoStore = useContext(TodoStore);
  const { info } = todoStore;

  useEffect(() => {}, []);

  return (
    <>
      <div className="row">
        <div className="col horizon-center">
          <div className="nes-container with-title is-centered">
            <p className="title">Total todo</p>
            <p>{info.total}</p>
          </div>
        </div>
        <div className="col horizon-center">
          <div className="nes-container with-title is-centered">
            <p className="title">Completed todo</p>
            <p>{info.completed}</p>
          </div>
        </div>
        <div className="col horizon-center">
          <div className="nes-container with-title is-centered">
            <p className="title">Incomplete todo</p>
            <p>{info.incompleted}</p>
          </div>
        </div>
      </div>
      <hr />
      <AddTodo />
      <hr />
      <TodoList />
    </>
  );
};

export default observer(Todos);
