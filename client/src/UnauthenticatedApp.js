import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';

function UnauthenticatedApp() {
    const { setCurrentUser } = useContext(AppContext);
    return (
        <AppContext.Provider value={{ setCurrentUser }}>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/signup' element={<SignUp />} />
                {/* <Redirect to="/" /> */}
            </Routes>
        </AppContext.Provider>
    );
}

export default UnauthenticatedApp;
