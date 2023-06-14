import React from "react";
import NavLink from "../NavLink/NavLink";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';
//import style  from './NavLink.module.css'

class Nav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <nav className={styles.nav}>
        <button className={styles.navButton}>
          <NavLink to="/home" exact="true"  activeclassname={styles.isActive}>HOME</NavLink>
        </button> 
        
        <button className={styles.navButton}>
          <NavLink to="/about" exact="true" activeclassname={styles.isActive}>ABOUT</NavLink>
        </button>

        <button className={styles.navButton}>
          <NavLink to="/favorites" exact="true" activeclassname={styles.isActive}>FAVORITE</NavLink>
        </button> 

        <SearchBar onSearch={this.props.onSearch} />
      </nav>
    );
  }
}

export default Nav;