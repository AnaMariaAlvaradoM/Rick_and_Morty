import React from "react";
import NavLink from "../NavLink/NavLink";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';
//import style  from './NavLink.module.css'

class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return (
      <nav className={styles.nav}>
        <button className={styles.navButton}>
          <NavLink to="/home" exact activeClassName={styles.isActive}>HOME</NavLink>
        </button> 
        
        <button className={styles.navButton}>
          <NavLink to="/about" exact activeClassName={styles.isActive}>ABOUT</NavLink>
        </button>
        <SearchBar onSearch={this.props.onSearch} />
      </nav>
    );
  }
}

export default Nav;