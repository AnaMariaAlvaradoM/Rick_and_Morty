import Card from '../Card/Card';
//import { CardsContainer } from "./styledComponents"
import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {
   return ( 
      <div className={style.container}>
  {characters.map(({ id, name, status, species, gender, origin, image }) => (
    <Card
      key={id} // Asigna la propiedad `id` como clave única
      id={id}
      name={name}
      status={status}
      species={species}
      gender={gender}
      origin={origin.name}
      image={image}
      onClose={onClose}
    />
  ))}
</div>
             
   )}

            




   
