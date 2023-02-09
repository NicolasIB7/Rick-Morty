export const ADD_MOVIE_FAVORITE="ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE="REMOVE_MOVIE_FAVORITE"
export const FILTER="FILTER"
export const ORDER="ORDER"

const initialState = {
    myFavorites:[],
    allCharacter:[],
  };

  function reducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {...state,
          allCharacter: [...state.allCharacter, action.payload], 
          myFavorites: [...state.allCharacter, action.payload],
          
        
        }
    }


    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          myFavorites:state.myFavorites.filter((movie)=>movie.id!==action.payload)
        };
    }

    if(action.type===FILTER){
      const filterCopy=[...state.allCharacter]
      const filter=filterCopy.filter(ch=>ch.gender===action.payload)
      return{
        ...state,
          myFavorites:filter
      }
    }

  if(action.type===ORDER){
    const orderCopy=[...state.allCharacter]
    const order=orderCopy.sort((a,b)=>{
      if (action.payload === "Ascendente" && a.id < b.id) {
        return 1;
      } else if (action.payload === "Ascendente" && a.id > b.id) {
        return -1;
      } else if (action.payload === "Descendente" && a.id > b.id) {
        return 1;
      } else if (action.payload === "Descendente" && a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    })
      return {...state,
      myFavorites:order};
  }

  else return {...state}
}
  export default reducer;
