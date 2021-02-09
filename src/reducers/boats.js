
const initialBoatsData = {
  boatsList: []
}

const boatsReducer = (state = initialBoatsData, action) => {
  switch (action.type) {
    case 'ADD_BOATS': {
      const { payload = {} } = action;
      return {
        boatsList: payload
      };
    }

    default:
      return state;
  }
}

export default boatsReducer;