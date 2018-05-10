class TodoStore extends ReduceStore {
    constructor() {
      super(TodoDispatcher);
    }
  
    getInitialState() {
      return Immutable.OrderedMap();
    }
}  