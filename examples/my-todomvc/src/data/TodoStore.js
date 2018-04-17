import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from './Counter';
import Todo from './Todo';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        // Do nothing for now, we will add logic here soon!
        
        if(!action.text)
          return state;
        const id = Counter.increment();
        return state.set(id, new Todo({
          id,
          text : action.text,
          complete: false
        }));
      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id);

      case TodoActionTypes.TOGGLE_TODO:
        console.log('state', state, 'action', action);
        return state.update(
          action.id,
          todo => todo.set('complete', !todo.complete),
        );
      default:
        return state;
    }
  }
}

export default new TodoStore();