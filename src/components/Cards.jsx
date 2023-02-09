import Card from './Card';
import React from 'react';
import SearchBar from "./SearchBar.jsx";
import style from "./cards.module.css";

export default function Cards(props) {
   const {characters}=props;
   return( 

   <div className={style.cards}>
{characters.map((character, index) =>{
   return <Card 
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      onClose={props.onClose}
      id={character.id}
      key={index}
      
      />

   })}
   </div>
   
)}


