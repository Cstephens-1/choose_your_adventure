import React from 'react';

const SignUp = () => {
    return (
        <form>
            <label htmlFor='username'>User name:</label>
            <input
                type='text'
                placeholder='Enter your username'
                id='username'
            />
            <label htmlFor='password'>Password:</label>
            <input
                type='password'
                placeholder='Enter your password'
                id='password'
            />
            <button type='submit'>Sign up</button>
        </form>
    );
};

export default SignUp;
