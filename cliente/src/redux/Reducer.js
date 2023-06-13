
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions/Actions_types';

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                // myFavorites:[...state.allCharacters, payload],
                // allCharacters: [...state.allCharacters, payload]
                myFavorites: payload,
                allCharacters: payload
            };
            
        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: payload,
                
                allCharacters: payload
                        // ...state,
                        // myFavorites:[...state.myFavorites.filter(char => char.id !== payload)]
            };
            case FILTER:
                const allCharactersfiltrados = state.allCharacters.filter( char => char.gender === payload )
                return{
                    ...state,
                    myFavorites:
                     payload === 'All' 
                     ? [...state.allCharacters] 
                      : allCharactersfiltrados
                }
            case ORDER:
                const orderChar = state.myFavorites.sort((x, y)=>{
                    if(payload === "A"){
                        return x.id - y.id;
                    }else {
                        return y.id - x.id;
                    }
                })
                return{
                    ...state, 
                    myFavorites:[...orderChar]
                }

            
            default:
                return {...state}
    }
}


export default rootReducer;