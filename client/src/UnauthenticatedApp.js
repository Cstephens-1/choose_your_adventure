import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'


function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Routes>
      <Route exact path="/" element = {<Login setCurrentUser={setCurrentUser} />} />
      <Route exact path="/signup" element={<SignUp setCurrentUser={setCurrentUser}/>} />
      {/* <Redirect to="/" /> */}
    </Routes>
  )
}

export default UnauthenticatedApp
