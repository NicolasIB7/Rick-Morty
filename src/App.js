import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import {Route, Routes, Link, useLocation, useNavigate} from "react-router-dom"
import About from "./components/About"
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'



function App () {
  const [characters, setCharacters] = useState([])
  const location=useLocation()
  const [access, setAccess]=useState(false)
  const username= "nicobouvet7@gmail.com"
  const password="nicobouvet7"
  const navigate=useNavigate()

  function login(input) {
    if (input.password === password && input.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }

 useEffect(() => {
  !access && navigate('/'); // si access es true entonces no me redirije a barra, siempre que sea false entonces siempre me redirijira a barra
}, [access]);

  const onSearch=(id)=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }  

  const onClose=(id)=>{
    setCharacters((oldChars)=>oldChars.filter((char)=>char.id!==id))
  }
  return (
    <div className='App' >
      {location.pathname!=="/" && <Nav onSearch={onSearch}/>}
      
        
    <Routes>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:detailId" element={<Detail/>}/>
      <Route path="/" element={<Form login={login}/>}/>
      <Route path="/favorites" element={<Favorites />}/>
    </Routes>
    </div>
  )
}

export default App





    //exact path='/ciudad/:ciudadId' // el metodo filter me devuelve un array y yo quiero pasar como parametro un objeto, por eso en la funcion on filter, le indicamos que nos retorne el primer elemento del array ya que todos los arrays van a tener un solo objeto ya que está filtrando por IDS
   // render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}