import ParseOptions from 'eleventy-plugin-toc/src/ParseOptions';
import React from 'react';
import {useState} from "react";
import style from "./Form.module.css"

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
};
export default function  Form(props) {
  const [input, setInput] = useState({
    username:"",
    password:"",
  })
  
  const [errors, setErrors] = useState({
    username:"",
    password:"",
  });

  const handleInputChange=(e)=>{
    const value=e.target.value; //esto sí será el valor que yo escriba dentro del input, por eso despues igualo las dos para que en la propiedad en la que esté parado sea igual al valor que yo esté escribiendo
    const property=e.target.name; //de acá saco que propiedad quiero cambiar porque en el input ya puse que name es igual a username, entonces depende en qué input escriba será la propiedad a la que acceda
    setInput({...input, [property]: value  //quiero que el nombre de mi propiedad sea igual al valor del input que yo ponga.
  })
  setErrors(validate({
    ...input,
    [property]: value
  }));
}

const handleSubmit=(e)=>{
  e.preventDefault()
  props.login(input)
}
  
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div>
        <label className={style.username}>Username:</label >
        <input className={errors.username && "danger" && style.input} type="text" name="username"  onChange={handleInputChange} value={input.username} />
        {errors.username && (
      <p className="danger">{errors.username}</p>)}
      </div>
      <div>
        <label className={style.username}>Password:</label>
        <input  className={errors.password && "danger" && style.input} type="password" name="password" value={input.password} onChange={handleInputChange}/>
        {errors.password && (
      <p className="danger">{errors.password}</p>)}
      </div>
      <div className={style.div}>
        <button type="submit" className={style.submit}>Ingresar</button>
      </div>

    </form>
  )
}
