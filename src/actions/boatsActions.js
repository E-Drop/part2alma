const addBoats = (payload) => {
  return {
    type: 'ADD_BOATS',
    payload: payload
  }
}

const filterBoats = (payload) => {
  return {
    type: 'FILTER_BOATS',
    payload: payload
  }
}

const clearFilters = (payload) => {
  return {
    type: 'CLEAR_FILTERS',
  }
}

const addMaterials = (payload) => {
  return { 
    type: 'ADD_MATERIALS',
    payload: payload
  }
}

const selectMaterial = (payload) => {
  return { 
    type: 'SELECT_MATERIAL',
    payload: payload
  }
}

export default {
  addBoats,
  filterBoats,
  clearFilters,
  addMaterials,
  selectMaterial
}