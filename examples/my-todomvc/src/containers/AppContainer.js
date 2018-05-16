import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';
import TodoDraftStore from '../data/TodoDraftStore';

function getStores() {
  return [
    TodoStore,
    TodoDraftStore
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    drafttodos: TodoDraftStore.getState(),
    onToggleTodo : TodoActions.toggleTodo,
    onDeleteTodo : TodoActions.deleteTodo,
    onDeleteCompletedTodo : TodoActions.deleteCompleteTodo,
    onMarkAllTodo: TodoActions.markallTodo,
    onAddDraftTodo: TodoActions.addDraftTodo
  };
}

export default Container.createFunctional(AppView, getStores, getState);