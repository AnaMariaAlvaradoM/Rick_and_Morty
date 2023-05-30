import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';
import style from './App.module.css';

function App() {
   return (
      <div className='App' style = {{ padding: "0px"}}>
         <div className=  {style.nav}>
          <SearchBar onSearch={(characterID) => alert(characterID)} />
         </div>
         <div>
            <Cards characters={characters} />         
         </div>  
      </div>
   );
}

export default App;
