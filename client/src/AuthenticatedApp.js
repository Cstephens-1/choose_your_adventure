import './App.css';
import {Routes, Route, useNavigate } from 'react-router-dom'
import Mypage from './components/Mypage';
// import NavBar from './components/NavBar';
import styled from 'styled-components';
// import CharCreation from './components/CharCreation';


function AuthenticatedApp({ currentUser, setCurrentUser }) {

  const navigate = useNavigate()
  
  const handleLogout = () => {
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
  return (
    <AppStyler>
      
      {/* <nav>
        <NavBar handleLogout={handleLogout} currentUser={currentUser}/>
      </nav> */}
      <Routes>
        <Route path="/mypage" element={<Mypage currentUser={currentUser}/>} />
        {/* <Route path="/createcharacter" element={<CharCreation />} /> */}
      </Routes>
    </AppStyler>
  );
}

export default AuthenticatedApp;
         

const AppStyler = styled.div`
`

          

         

          