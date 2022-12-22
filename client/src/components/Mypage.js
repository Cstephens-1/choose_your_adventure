import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import {useContext, useState} from "react"
import { AppContext } from "../App";
import CharacterCreate from "./ChracterCreate";
 
 
function Mypage(){

    const {currentUser, setCurrentUser} = useContext(AppContext)
    
    
    console.log("currentuser: ", currentUser)


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

  // function fetchCharacters(){
  //   fetch("http://localhost:3000/characters")
  //   .then(resp=> resp.json())
  //   .then(char=> setChars(char))
  // }

  // console.log(chars)
        

    return(
      <>
        <AppContext.Provider value={{handleLogout, currentUser}}>
          <h1>test in my page</h1>
        </AppContext.Provider>
      </>
    )}
 
export default Mypage