/* Importation des modules */
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/* Importation des ressources */
import { IoCloseCircle } from 'react-icons/io5';

/* Importation des données */
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../utils/dataProvider/DataProvider';

/* Importation des composants */
import Button from '../../button';
import { toast } from 'sonner';

/* Importation des styles */
import './style.scss';

export const Login = ({ onClose }) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('vachet.matthieu@icloud.com');
    const [password, setPassword] = useState('Matthieuvachet061290');
    const { setIsLoggedIn, setToken } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://api-rest-portfolio-mauve.vercel.app/Api/v1/auth/login',
                { email, password },
            );
            const { token } = response.data;
            console.log('Token:', token);
            setToken(token);
            setIsLoggedIn(true);
            onClose();
            toast.success(t('login.success-login'));
        } catch (error) {
            toast.error(t('login.error-login'));
            console.error('Error:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className='auth-form-container' role='dialog' aria-labelledby='login-title'>
            <div className='close-icon'>
                <IoCloseCircle className='close-icon' onClick={onClose} />
            </div>
            <h2 id='login-title' className='login-title'>
                Login
            </h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label className='label-form' htmlFor='email'>
                    email
                </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='vachet.matthieu@icloud.com'
                    id='email'
                    name='email'
                    className='input-form'
                    aria-label='Email'
                    aria-describedby='email-description'
                />
                <label className='label-form' htmlFor='password'>
                    password
                </label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Matthieuvachet061290'
                    id='password'
                    name='password'
                    className='input-form'
                    aria-label='Password'
                    aria-describedby='password-description'
                />
                <Button
                    type='submit'
                    text='Login'
                    className='link-btn'
                    width={'20rem'}
                    height={'4rem'}
                    aria-label='Login Button'
                />
            </form>
        </div>
    );
};

Login.propTypes = {
    onClose: PropTypes.func.isRequired,
};
