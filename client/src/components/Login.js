import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../App';
import styled from 'styled-components';


function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { setCurrentUser } = useContext(AppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user);
                    setError('');
                    navigate('/mypage');
                });
            } else {
                res.json().then((errors) => {
                    setError(errors.error);
                });
            }
        });
    };
    return (
        <AppWrapper>
            <LoginWrapper>
                <FormWrapper onSubmit={handleSubmit}>
                    <p>
                        <LabelStyler htmlFor='username'>Username </LabelStyler>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </p>
                    <p>
                        <LabelStyler htmlFor='password'>Password </LabelStyler>
                        <input
                            type='password'
                            name=''
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </p>

                    <ButtonStyler type='submit'>Log In</ButtonStyler>
                    <NavLink to='/signup'>Signup</NavLink>
                </FormWrapper>
                {error}
            </LoginWrapper>
        </AppWrapper>
    );
}


export default Login;

const AppWrapper = styled.div`
    background: linear-gradient(blue, green);
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
`;

const LoginWrapper = styled.div`
    background-color: white;
    text-align: center;
    margin: 25vh;
    padding-top: 25px;
    padding-bottom: 25px;
`;

const ButtonStyler = styled.button`
    border-style: none;
    background-color: white;
    color: black;
    font-size: 25px;
    font-family: Graduate;
    font-weight: 800;
    margin-right: 30px;
    &:hover {
        color: white;
        background: black;

    }
`;

const NavLink = styled(Link)`
    font-family: Graduate;
    font-weight: 800;
    font-size: 24px;
    color: teal;
    text-decoration: none;

    padding-top: 5px;
    &:hover {
        color: white;
        background: black;
    }
`;

const LabelStyler = styled.label`
    font-family: Graduate;
    font-weight: 600;
    font-size: 30px;
    color: teal;
`;
const FormWrapper = styled.form`
    background-color: black;
`;
