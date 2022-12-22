import { useContext } from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import { AppContext } from "../App"
// import Button from 'react-bootstrap/Button';
 
function NavBar(){

 const{currentUser, handleLogout} =useContext(AppContext)
    return(
      <>
         <SpanStyler>Welcome, {currentUser.username}</SpanStyler>
        <NavBarStyler>
          <NavLink to="/mypage">Home</NavLink>
          <NavLink to="/charactercreation">Create a Character</NavLink>
          <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
        </NavBarStyler>
         </>
    )
}
 
 
 
export default NavBar

const NavBarStyler = styled.div`
    background-color: black;
    height: 100vh;
    width: 5vw;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
`

// const ButtonStyler = styled.button`
//     border-radius: 8px;
//     font-size: 22px;
//     margin: 4px;
//     background-color: white;

    
// `

const NavLink = styled(Link)`
font-family: Graduate;
  color: orange;
  text-decoration: none;
  padding:20px;
  margin-top: 40px;
  &:hover {
    color: white;
    background: navy;
  }
  `

  const SpanStyler=styled.span`
    font-family: Graduate;
  color: orange;
  text-decoration: none;
  padding:20px;
  right: 0;
  top: 0;
  position: absolute;
  `