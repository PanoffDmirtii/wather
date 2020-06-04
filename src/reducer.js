export const TYPES = {
  SET_DATA: 'SET_DATA',
  SET_SEARCH: 'SET_SEARCH',
  ADD_FAVORITE: 'ADD_FAVORITE',
}

export const initState = {
  search: '',
  data: null,
  favorires: []
};

export function reducer(state, action) {
  switch (action.type) {
    case TYPES.SET_DATA:
      return { ...state, data: action.payload };
    case TYPES.SET_SEARCH:
      return { ...state, search: action.payload };
    case TYPES.ADD_FAVORITE:
      return { ...state, favorires: [...state.favorires, action.payload] };
    default:
      return {...state};
  }
}