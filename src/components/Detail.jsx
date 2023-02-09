import React from 'react';
import { useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import style from "./Detail.module.css"

export default function Detail(props) {
const {detailId} =useParams()

const [character, setCharacter]=useState({})


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
   return (
      <div className={style.div}>
        <h1 className={style.titulo}>{character.name}</h1>
        <img src={character.image} className={style.img}/>
        <h1>{character.status}</h1>
        <h1>{character.species}</h1>
        <h1>{character.gender}</h1>
        <h1>{character.origin?.name}</h1> 
      </div>
   );
}


//el signo de pregunta en origin nos indica que si está origin entonces entrá a la prop sino no