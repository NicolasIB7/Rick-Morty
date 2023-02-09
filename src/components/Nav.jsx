import React from 'react';
import SearchBar from './SearchBar.jsx';
import style from "./nav.module.css"
import { Link } from 'react-router-dom';
function Nav({onSearch}) {
  return (
  <div className={style.nav}>
    <nav className={style.navnav}>

    <Link to="/home" className={style.linkImg}>
          <img src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" className={style.imagen} />    
      </Link>

      <div className={style.div}>

      <SearchBar onSearch={onSearch}></SearchBar>

      <Link to="/about" className={style.links}>
        <span>About</span>
      </Link>


      <Link to="/favorites" className={style.links}>
        <span>Favoritos</span>
      </Link>
      </div>
    </nav>
  </div>
  );
};

export default Nav;

