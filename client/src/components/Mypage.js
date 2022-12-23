import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import {useContext, useEffect, useState} from "react"
import { AppContext } from "../App";
import CharacterCreate from "./ChracterCreate";
 
 
function Mypage(){

    const {currentUser, setCurrentUser} = useContext(AppContext)
    const [characters, setCharacters] = useState([])
    
    console.log(characters)


const navigate = useNavigate();

//logout of the app
const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          navigate('/')
          console.log(currentUser)
        }
      })
  }

  function fetchCharacters(){
    fetch("http://localhost:3000/characters")
    .then(resp=> resp.json())
    .then(char=> setCharacters(char))
  }

  // useEffect(fetchCharacters, [])
        

    return(
      <>
        <AppContext.Provider value={{handleLogout, currentUser}}>
          <h1>test in my page</h1>
          {/* <h1>{characters[0].name}</h1> */}
        </AppContext.Provider>
      </>
    )}
 
export default Mypage