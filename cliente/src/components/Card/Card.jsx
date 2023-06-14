import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {addFav, removeFav} from '../../redux/actions/Actions';
import { useState, useEffect } from "react";

 function Card({ id, name, status, species, gender, image, origin, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((charFav) => {
         if (charFav.id === id) {
            setIsFav(true); 
         }
      });
   }, [myFavorites]);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({id, name, status, species, gender, image, origin, onClose})
      }
   }
   return (
      <div className={style.container}>
         <button onClick= {() => onClose(id)} className={style.closeButton} >X
         </button>
         {
            isFav? (
                <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <h2> {id}</h2>
         <Link to = {`/detail/${id}`}> <h1 className={style.titleName}> {name}</h1></Link>
         <img src={image} alt='' />
         <h2> Spicies: {species}</h2>
         <h2> Gender: {gender}</h2>
         <h2> Status: {status}</h2>
         <h2> Origin: {origin}</h2>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return { 
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}
export function mapStateToProps(state){
   return{
      myFavorites:state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps) (Card);