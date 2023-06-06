import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'

//La haremos con componente de clase
class Nav extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return <nav className={style.nav}>
            <SearchBar onSearch={this.props.onSearch} />
        </nav>
    }
}

export default Nav;