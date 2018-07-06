const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };

    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };

    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload.val
      };

    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.payload.val
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({ value: state.counter, id: new Date() })
      };
    case 'DELETE_RESULT':
      const updatedArray = state.results.filter(
        result => result.id !== action.payload.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default reducer;
