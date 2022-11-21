import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import {useContext} from "react"
import { AppContext } from "../App";
 
 
function Mypage(){

    
    const {currentUser, setCurrentUser} = useContext(AppContext)
    console.log(currentUser)


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
        }
      })
  }


        

    return(
       <AppContext.Provider value={{handleLogout, currentUser}}>
        <div>
            <NavBar/>
            <h1>test in my page</h1>
        </div>
        </AppContext.Provider>

    )}
 
export default Mypage