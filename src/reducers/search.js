// import {searchRequest, searchSuccess, searchFailure} from '../Actions/search';

const initialSearch = {
  isFetching: false,
  entities: []
}


export const search = (state = initialSearch, action) => {
  switch (action.type) {
    case 'SEARCH_REQUEST':
      return {...state, isFetching: true};
    case 'SEARCH_SUCCESS':
      return { isFetching: false, entities: [...action.payload]}
    case 'SEARCH_FAILURE':
      return {...state, isFetching: false}
    default:
      return state;
  }
}

export const getShows = (state) => state.shows.entities;
export const getIsFetching = (state) => state.shows.isFetching;
