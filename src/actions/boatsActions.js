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

export default {
  addBoats,
  filterBoats,
  clearFilters
}