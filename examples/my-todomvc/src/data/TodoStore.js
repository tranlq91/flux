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
        console.log('action', action);
        return state.delete(action.id);

      case TodoActionTypes.TOGGLE_TODO:
        console.log('state', state);
        return state.update(
          action.id,
          todo => todo.set('complete', !todo.complete),
        );
      case TodoActionTypes.DELETE_COMPLETE_TODO:
        let _state = state;
        _state.map(todo => {
          if(todo.complete === true) {
            console.log('todo', todo);
            const id = todo.id;
            todo.map( s => {state.delete(s);});
            
           
          }
        });
        console.log('new _state',state);
        return state;
     

      default:
        return state;
    }
  }
}

export default new TodoStore();