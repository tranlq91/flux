import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoDraftStore extends ReduceStore {
    constructor() {
      super(TodoDispatcher);
    }

    getInitialState() {
      return Immutable.OrderedMap();
    }
    reduce(state, action) {
        switch (action.type) {
          case TodoActionTypes.ADD_DRAFT_TODO:
            console.log('insert draft');
            return state;

          default:
            return state;
        }
    }
}

export default new TodoDraftStore();