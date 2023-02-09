import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Card from "./Card";
import actions, { addMovieFavorite, filterCards, orderCards, removeMovieFavorite } from "../redux/actions"
import style from "./Favorites.module.css"


export function Favorites(props){ //traeme todo lo que tenga myfavorites, lo demas no me interesa
console.log(props)
const dispatch=useDispatch()

const handlerClick=(e)=>{
  const {name,value}=e.target
  switch(name){
   case "ORDER" :
    return dispatch(orderCards(value))
  
  case "FILTER":
    return dispatch(filterCards(value))
  }
}
    return (

    <div>
      <div className={style.filtros}>
      <select name="ORDER" onChange={handlerClick} className={style.select}>
        <option value="Ascendente">ASCENDENTE</option>
        <option value="Descendente">DESCENDENTE</option>
      </select>
      <select name="FILTER" onChange={handlerClick} className={style.select}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>
      </select>
      </div>

       {props.myFavorites?.map((character, index)=>{
       return <Card
        name={character.name}
        species={character.species}
        gender={character.gender}
        image={character.image}
        id={character.id}
        key={index}
        />
       })} 

    </div>

    )
    
  }
//si se cumple que length es mayor a 0 hacé eso, y con los dos puntos indico que se no se mapea nada entonces es null

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

const mapDispatchToprops = (dispatch) => {
  return {
    filterCards: (status) => dispatch(filterCards(status)),
    orderCards: (id) => dispatch(orderCards(id)),
  };
};



export default connect(
  mapStateToProps,mapDispatchToprops

)(Favorites);



