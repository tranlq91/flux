import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
class TodoEditStore extends ReduceStore {
    constructor() {
      super(TodoDispatcher);
    }
  
    getInitialState() {
      return Immutable.OrderedMap();
    }
    reduce(state, action) {
        switch (action.type) {
          case 'increment':
            return state;
        }
    }
}  