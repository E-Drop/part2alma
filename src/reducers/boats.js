
const initialBoatsData = {
  boatsList: [],
  allBoats: [],
  materials: [],
  selectedMaterial: ''
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
        boatsList: state.allBoats.filter((item) => item.properties.material === payload)
      };
    }
    
    case 'CLEAR_FILTERS': {
      return {
        ...state,
        boatsList: state.allBoats,
        selectedMaterial: ''
      };
    }

    case 'ADD_MATERIALS': {
      const { payload = {} } = action;
      return {
        ...state,
        materials: payload
      }
    }

    case 'SELECT_MATERIAL': {
      const { payload = {} } = action;
      return {
        ...state,
        selectedMaterial: payload
      }
    }

    default:
      return state;
  }
}

export default boatsReducer;