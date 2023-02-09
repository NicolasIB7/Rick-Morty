import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import style from "./Card.module.css"
import actions, { addMovieFavorite, removeMovieFavorite } from "../redux/actions"
import { reducer } from '../redux/reducer';
import Favorites from './Favorites';
import { connect } from "react-redux";

export function Card(props) {
console.log(props)
   const [isFav,setIsFav]=  useState(false)

   const handleFavorite=()=>{
      if (isFav===true){
         setIsFav(false);
         props.removeMovieFavorite(props.id);}
      else{
         setIsFav(true);
         props.addMovieFavorite(props)
      }
   }
   
   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [props.myFavorites, props.id]);
 

  

   return (
      <div className={style.div}>
        
         <div className={style.divBoton}>
         {
   isFav ? (
      <button onClick={handleFavorite} className={style.corazon}>❤️</button>
   ) : (
      <button onClick={handleFavorite} className={style.corazon}>🤍</button>
   )
}
            <button className={style.button} onClick={()=>props.onClose(props.id)}>X</button>
         </div>
         <div className={style.imgNombre}>
            <img  src={props.image} alt="" className={style.imagen} />
            <Link to={`/detail/${props.id}`}>
            <h3 className={style.name}>{props.name}</h3>
            </Link>
         </div>
      <div className={style.divGenero}>  
         <h3 className={style.gender}>{props.gender}</h3>
         <h3 className={style.species}>{props.species}</h3>
      </div>    
         a
      </div>
   );
}


function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   };
 }
 
 function mapDispatchToProps(dispatch) {   //paquete de funciones que hacen dispatch
   return {
      addMovieFavorite:(id)=>{dispatch(addMovieFavorite(id))},
     removeMovieFavorite: (id) => {dispatch(removeMovieFavorite(id))},
   
 }}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
 

 



