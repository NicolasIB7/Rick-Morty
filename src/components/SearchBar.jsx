import React from 'react';
import style from "./SearchBar.module.css";
import { useState } from 'react';


export default function SearchBar({onSearch}) {

   const[searchInput,setSearchInput]=useState("");

  const changeHandler=(evento)=>{
    setSearchInput(evento.target.value)

  }

   return (
      <div className={style.search}>
         <input className={style.input} type='search' onChange={changeHandler} placeholder="Ingrese un numero" />
         <button className={style.botonSearch} onClick={()=>onSearch(searchInput)}>Agregar</button> 
      </div>
   );
}

