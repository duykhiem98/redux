const initialState = { value: 0 };

const changeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UP' : {
      state.value = state.value + 1;
      return state;
    }
    case 'DOWN' : {
      state.value = state.value - 1;
      return state;
    }

    default:
      return state;
  }
};

export default changeReducer;

