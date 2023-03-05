
import { combineReducers } from "redux";

import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURATES, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState ={
    list:[],
    favourites:[],
    showFavourites:false
   
}
export function movies(state= initialMoviesState,action){
//     if(action.type===ADD_MOVIES){
//         return {
//             ...state,
//             list:action.movies
//         }
//     }
//     return state;

switch(action.type){
case ADD_MOVIES:
    return{
        ...state,
        list:action.movies
    }
    case ADD_FAVOURITE:
        return{
            ...state,
            favourites:[action.movie, ...state.favourites]
        }

        case REMOVE_FROM_FAVOURATES:
       const filterArray= state.favourites.filter(movie => movie.Title !== action.movie.Title);

            return {
                ...state,
                favourites:filterArray
            }

            case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites: action.val
            }

        default:
            return state;
}
 }



const initialSearchState={
    result:{}
     
}

 export function search(state =initialSearchState, action){
    return state;
 }


 const initialRootState={
    movies:initialMoviesState,
    search:initialSearchState
 }
//  export function rootReducer(state=initialRootState,action){
//     return{
//         movies: movies(state.movies, action),
//         search:search(state.search, action)
//     }

 export default combineReducers({
    movies,
    search
 });

