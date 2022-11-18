import {Link} from "react-router-dom"
import styled from "styled-components"
// import Button from 'react-bootstrap/Button';
 
function NavBar({handleLogout, currentUser}){
    return(
      <>
         {/* <SpanStyler>Welcome, {currentUser.username}</SpanStyler> */}
        <NavBarStyler>
          <NavLink to="/mypage">Home</NavLink>
          {/* <NavLink to="/createcharacter">Create</NavLink> */}
          <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
        </NavBarStyler>
         </>
    )
}
 
 
 
export default NavBar

const NavBarStyler = styled.div`
    background-color: black;
    height: 100vh;
    width: 15vw;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    top: 0;
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
  position: absolute;
  `