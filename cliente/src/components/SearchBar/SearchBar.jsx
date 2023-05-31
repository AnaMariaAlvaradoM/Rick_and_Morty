import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
   return (
      <div className={style.bar}>
         <input type='search' className={style.SearchInput}/>
         <button 
         className={style.SearchButton}
            onClick={(id) => {
               onSearch(id);
            }}   
            >
            Agregar     
         </button>
      </div>
   );
}
