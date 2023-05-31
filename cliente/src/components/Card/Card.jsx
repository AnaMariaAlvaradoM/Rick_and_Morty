import style from "./Card.module.css";

 function Card({ name, status, species, gender, image, origin, onClose }) {
   return (
      <div className={style.container}>
         <button onClick={onClose} className={style.closeButton}>
            X
         </button>
         <h2> Name: {name}</h2>
         <img src={image} alt='' />
         <h2> Spicies: {species}</h2>
         <h2> Gender: {gender}</h2>
         <h2> Status: {status}</h2>
         <h2> Origin: {origin}</h2>
      </div>
   );
}

export default Card;