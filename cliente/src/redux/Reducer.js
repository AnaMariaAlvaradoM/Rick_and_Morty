import { ADD_FAV, REMOVE_FAV } from './actions/Actions_types';


const initialState = {
    myFavorites:[],
}

function rootReducer(state = initialState, aciton){
    switch(aciton.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites, aciton.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites.filter(char=> char.id !== aciton.payload)]
            }
        default:
            return {...state}
    }
}


export default rootReducer;