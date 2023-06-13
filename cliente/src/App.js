import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route,  useLocation, useNavigate } from 'react-router-dom';
import About from './about/About.jsx'
import Form from './components/Form/Form.jsx'
import  {Detail}  from './components/Detail/Detail.jsx'
import Favorites from './components/Favorites/Favorites.jsx';

const email = 'ana_alvarado@henry.com'
const password = '1111'

function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [ access, setAccess] = useState(false)


   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
   // function login ({ email, password }){
   //    if(email === EMAIL && password === PASSWORD){
   //       setAcces(true)
   //       navigate('/home')
   //    }
   //    else alert('Usuario o contraseña no validos')
   // }


   useEffect(() => {
      !access && navigate('/')
   }, [access])
   
   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      
      .then(({ data }) => {
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
        {  pathname  !== '/' &&  <Nav onSearch = {onSearch} />}
         <Routes>
            <Route path='/' element = {<Form login = {login}/>}/>
            <Route path='/home' element = {<Cards characters = {characters} onClose={onClose} />  }/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/detail/:id' element = {<Detail/>}/>
            <Route path='/favorites' element = {<Favorites/>}/>
         </Routes>
                  
      </div>
   );
}

export default App;
