import {ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE,FILTER, ORDER} from "./reducer";





export function addMovieFavorite(id) {
    return { type: ADD_MOVIE_FAVORITE, payload:id };
  }

  export function removeMovieFavorite(id) {
    return { type: REMOVE_MOVIE_FAVORITE, payload:id };
  }

  export function filterCards(status) {
    return { type: FILTER, payload:status };
  }
  export function orderCards(id) {
    return { type: ORDER, payload:id };
  }
  
  