// import {showRequest, showSuccess, showFailure} from '../Actions/shows';

const initialShow = {
  isFetching: false,
  entities: []
}


export const shows = (state = initialShow, action) => {
  switch (action.type) {
    case 'SHOW_REQUEST':
      return {...state, isFetching: true};
    case 'SHOW_SUCCESS':
      return {...state, isFetching: false, entities: action.payload}
    case 'SHOW_FAILURE':
      return {...state, isFetching: false}
    default:
      return state;
  }
}

export const getShows = (state) => state.shows.entities;
export const getIsFetching = (state) => state.shows.isFetching;
