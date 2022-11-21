import React, { useState, useEffect, createContext } from 'react';
// import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { BrowserRouter as Router } from 'react-router-dom';
import Mypage from './components/Mypage';
import Login from './components/Login';
import SignUp from './components/SignUp';

export const AppContext = createContext(null);

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        fetch('/me', {
            credentials: 'include',
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user);
                    setAuthChecked(true);
                });
            } else {
                setAuthChecked(false);
            }
        });
    }, []);

    // if (!authChecked) {
    //     return <div></div>;
    // }
    return (
        <AppContext.Provider
            value={{ currentUser, setCurrentUser, authChecked, setAuthChecked }}
        >
            <Router>
                {currentUser ? (
                    <Mypage />
                ) : (
                     <UnauthenticatedApp />
                )}
            </Router>
        </AppContext.Provider>
    );
}

export default App;
