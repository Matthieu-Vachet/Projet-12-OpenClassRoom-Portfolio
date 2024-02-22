import { useState } from 'react';
import Button from '../../button';
import { IoCloseCircle } from 'react-icons/io5';
import PropTypes from 'prop-types';

import './style.scss';

export const Login = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        onClose();
    };

    return (
        <div className='auth-form-container'>
            <div className='close-icon'>
                <IoCloseCircle className='close-icon' onClick={onClose} />
            </div>
            <h2 className='login-title'>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label className='label-form' htmlFor='email'>
                    email
                </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='youremail@gmail.com'
                    id='email'
                    name='email'
                    className='input-form'
                />
                <label className='label-form' htmlFor='password'>
                    password
                </label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type='password'
                    placeholder='********'
                    id='password'
                    name='password'
                    className='input-form'
                />
                <Button
                    type='submit'
                    text='Login'
                    className='link-btn'
                    href='/'
                    onClick={handleSubmit}
                    width={'20rem'}
                    height={'4rem'}
                />
            </form>
        </div>
    );
};

Login.propTypes = {
    onClose: PropTypes.func.isRequired,
};
