import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },
  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },
  deleteCompleteTodo() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_COMPLETE_TODO
    })
  },
  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    })
  },
  markallTodo() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.MARK_ALL_TODO
    })
  }
};

export default Actions;