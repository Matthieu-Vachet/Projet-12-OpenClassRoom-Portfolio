/**
 * Composant de formulaire de connexion.
 *
 * Ce composant affiche un formulaire de connexion avec des champs pour l'email et le mot de passe.
 * Il utilise le contexte `AuthContext` pour gérer l'état de connexion et le token de l'utilisateur.
 * Il utilise également la bibliothèque `axios` pour faire une requête POST à l'API de connexion.
 * En cas de succès, il ferme le formulaire et affiche un toast de succès.
 * En cas d'échec, il affiche un toast d'erreur.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.onClose - La fonction à appeler lorsque le formulaire est fermé.
 * @returns {JSX.Element} Le JSX du composant.
 */

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

export default function Login({ onClose }) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLoggedIn, setToken } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://api-rest-portfolio-mauve.vercel.app/Api/v1/auth/login',
                { email, password },
            );
            const { token } = response.data;
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
}

Login.propTypes = {
    onClose: PropTypes.func.isRequired,
};
