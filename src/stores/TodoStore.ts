import { observable, action, computed } from 'mobx';
import { createContext } from 'react';
import { v4 as uuidV4, v4 } from 'uuid';

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  @observable todos: Todo[] = [
    {
      id: v4(),
      title: 'Todo 1',
      completed: false,
    },
  ];

  @action addTodo = (todo: Todo) => {
    this.todos.push({ ...todo, id: uuidV4() });
  };

  @action toggleTodo = (id: string) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  };

  @action removeTodo = (id: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  @computed get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter((todo) => todo.completed).length,
      incompleted: this.todos.filter((todo) => !todo.completed).length,
    };
  }
}

export default createContext(new TodoStore());
