import style from "./Card.module.css";
import { Link } from "react-router-dom";


 function Card({ id, name, status, species, gender, image, origin, onClose }) {
   return (
      <div className={style.container}>
         <button onClick= {() => onClose(id)} className={style.closeButton} 
         >X
         </button>
         <hr></hr>
         <Link to = {`/detail/${id}`}> <h1 className={style.titleName}> {name}</h1></Link>
         <img src={image} alt='' />
         <h2> Spicies: {species}</h2>
         <h2> Gender: {gender}</h2>
         <h2> Status: {status}</h2>
         <h2> Origin: {origin}</h2>
      </div>
   );
}

export default Card;