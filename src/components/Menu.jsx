
import React from 'react';
import { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleKeyUp = () => {
    
        if (email.endsWith('.ru')) {
            setLoginMessage(`Email ending with ".ru": ${email}`);
        } else {
            setLoginMessage('');
        }
    };

    const handleLogin = () => {
       
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        
        console.log('Logging in with:', email);

        
        if (email.endsWith('.ru')) {
            setLoginMessage(`Logged in as: ${email}`);
        } else {
            setLoginMessage('Email must end with ".ru"');
        }
    };

    return (
        <div className='userLogin'>
            <div className="inputs">
            <h1>Login:</h1>
              <div className='i1'>
                <input type="text" placeholder='Email' className='email' value={email} onChange={handleEmailChange} onKeyUp={handleKeyUp}/>
                </div>
                <div className='i2'>
                <input type="password" placeholder='Password' className='password' value={password} onChange={handlePasswordChange}/>
                </div>
                <button className='login' onClick={handleLogin}>
                    Login
                </button>
            </div>
            {loginMessage && <p>{loginMessage}</p>}
        </div>
    );
}

export default Menu;
