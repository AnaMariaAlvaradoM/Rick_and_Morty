import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route,  useLocation, useNavigate } from 'react-router-dom';
import About from './about/About.jsx'
import Form from './components/Form/Form.jsx'
import { Detail } from './components/Detail/Detail.jsx'
//import characters from './data.js';
//import style from './App.module.css';

function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [ access, setAcces] = useState(false)

   const EMAIL = 'ana_alvarado@henry.com'
   const PASSWORD = 'Pass_1234'

   function login ({ email, password }){
      if(email === EMAIL && password === PASSWORD){
         setAcces(true)
         navigate('/home')
      }
      else alert('Usuario o contraseña no validos')
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
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
       <div className='App'>
        { pathname !== '/' &&  <Nav onSearch = {onSearch} />}
         <Routes>
            <Route path='/' element = {<Form login = {login}/>}/>
            <Route path='/home' element = {<Cards characters = {characters} onClose={onClose} />  }/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/detail/:id' element = {<Detail/>}/>
         </Routes>
                  
      </div>
   );
}

export default App;
