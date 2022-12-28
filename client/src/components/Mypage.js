import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import {useContext, useEffect, useState} from "react"
import { AppContext } from "../App";
import CharacterCreate from "./ChracterCreate";
import CharacterDetails from "./CharacterDetails";
 
 
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

  useEffect(fetchCharacters, [])
        
  function mapCharacters(characters){
    return(
        characters.map(character =>{
            return(
              <AppContext.Provider value={{character, handleDelete, fetchCharacters}}>
                <CharacterDetails handleDelete={handleDelete} character={character}/>
                </AppContext.Provider>
            )
        })
       
    )
}

function handleDelete(character){
  fetch(`http://localhost:3000/characters/${character.id}`,{ 
      method: "DELETE"
  })
  let charactersRemaining = characters.filter(eachCharacter => eachCharacter.id !== character.id);
  console.log(charactersRemaining)
  setCharacters([...charactersRemaining])
}
    return(
      <>
        <AppContext.Provider value={{handleLogout, currentUser}}>
          <h1>test in my page</h1>
          {mapCharacters(characters)}
        </AppContext.Provider>
      </>
    )}
 
export default Mypage