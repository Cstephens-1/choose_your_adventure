import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../App';

const SignUp = () => {

    const {setCurrentUser} = useContext(AppContext)
    const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            navigate('/mypage')
          })
        } else {
          setCurrentUser(null)
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
    return (
        <AppContext.Provider value={{setCurrentUser, setUsername, setPassword}}>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>User name:</label>
            <input type='text' placeholder='Enter your username' id='username'onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='Enter your password' id='password' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Sign up</button>
            <Link to="/">Log In</Link>
        </form>
        </AppContext.Provider>
    );
};

export default SignUp;
