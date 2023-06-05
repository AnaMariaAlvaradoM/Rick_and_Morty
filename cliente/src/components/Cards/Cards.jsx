import Card from '../Card/Card';
//import { CardsContainer } from "./styledComponents"
import style from './Cards.module.css'

export default function Cards({ characters }) {
      const onClose = ('Emulamos que se cierra la card');
   return ( 
      <div className={style.container}>
         { characters.map(
            ({ id, name, status, species, gender, origin, image }) => (
               <Card
               key={id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin.name}
               image = {image}
               onClosse = {onClose}
               />
               )
               )}
         </div>
   )}

            




   
