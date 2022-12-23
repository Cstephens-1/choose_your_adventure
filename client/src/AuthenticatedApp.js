import {Routes, Route, useNavigate } from 'react-router-dom'
import Mypage from './components/Mypage';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { AppContext } from './App';
import CharacterCreate from './components/ChracterCreate';
import NavBar from './components/NavBar';


function AuthenticatedApp() {

  const {currentUser, setCurrentUser} = useContext(AppContext)
  const [characters, setCharacters] = useState([])
    
  console.log("currentuser: ", currentUser)

  const navigate = useNavigate()
  
  function handleLogout(){
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          navigate('/')
        }
      })
  }

  function fetchCharacters(){
    fetch("http://localhost:3000/characters")
    .then(resp=> resp.json())
    .then(char=> setCharacters(char))
  }

  return (
    <AppContext.Provider value={{handleLogout, currentUser, characters}}>
          <AppStyler>
            <nav>
              <NavBar handleLogout={handleLogout} currentUser={currentUser}/>
            </nav>
        <Routes>
          <Route path ="/mypage" element={<Mypage characters={characters}/>}></Route>
          <Route path="/charactercreation" element={<CharacterCreate />}></Route>
        </Routes>
      </AppStyler>
    </AppContext.Provider>
  )
}

export default AuthenticatedApp;
         
const AppStyler = styled.div`
`

          

         

          