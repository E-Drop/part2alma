
const initialBoatsData = {
  boatsList: [],
  allBoats: []
}

const boatsReducer = (state = initialBoatsData, action) => {
  switch (action.type) {
    case 'ADD_BOATS': {
      const { payload = {} } = action;
      return {
        boatsList: payload,
        allBoats: payload
      };
    }

    case 'FILTER_BOATS': {
      const { payload = {} } = action;
      return {
        ...state,
        boatsList: state.boatsList.filter((item) => item.properties.material === payload)
      };
    }
    
    case 'CLEAR_FILTERS': {
      return {
        ...state,
        boatsList: state.allBoats
      };
    }

    default:
      return state;
  }
}

export default boatsReducer;