import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./Actions_types";
import axios from 'axios';

export const addFav = (character) => {
    // return {
    //     type: ADD_FAV,
    //     payload
    // }
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return (dispatch) => {
           axios.post(endpoint, character)
           .then(({ data }) => {
              return dispatch({
                 type: ADD_FAV,
                 payload: data,
              });
           });
        };
    };

export const removeFav = (id) => {
        // type: REMOVE_FAV,
        // payload: id   
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return (dispatch) => {
           axios.delete(endpoint)
           .then(({ data }) => {
                return dispatch({
                 type: REMOVE_FAV,
                 payload: data,
                });
            });
        };
}; 


export const filterCards = (gender) => { 
    return{
        type: FILTER,
        payload: gender
    }
}
export const orderCards = function(order)
{
    return{
        type: ORDER,
        payload: order
    }
}

