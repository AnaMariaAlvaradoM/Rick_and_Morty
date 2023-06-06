import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
//import characters from './data.js';
//import style from './App.module.css';

function App() {
   const [characters, setCharacters] = useState([])
  
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if(!characters.find(char=> char.id === data.id)){
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
         } else {
            alert(`¡El personaje ${id} ya está siendo mostrado!`)
         }
      }).catch(() => window.alert('¡No hay personajes con este ID!'))
   }

   const onClose = (id) => {
     setCharacters( characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App' >
   
         <Nav onSearch = {onSearch} />
            <Cards characters = {characters} onClose={onClose} />           
      </div>
   );
}

export default App;
