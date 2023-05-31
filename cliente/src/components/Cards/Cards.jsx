import Card from '../Card/Card';
import { CardsContainer } from "./styledComponents"

export default function Cards({ characters }) {
   const onClose = ('Emulamos que se cierra la card');
   return ( 
      <CardsContainer>
         { characters.map(({ id, name, status, species, gender, origin, image }) => {
               return(
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
               );
         })}
      </CardsContainer>
   );
}