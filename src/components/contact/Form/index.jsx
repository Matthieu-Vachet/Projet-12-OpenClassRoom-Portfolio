/* Importation des modules */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Composants
import Button from '../../button';

// Ressources
import { GrValidate } from 'react-icons/gr';

// Style
import './style.scss';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailValid, setEmailValid] = useState(true); // State pour gérer la validité de l'email
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const { t } = useTranslation();

    const validateEmail = (email) => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return pattern.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstname':
                setFirstName(value);
                if (value.length < 3) {
                    setFirstNameError(t('error.firstname'));
                } else {
                    setFirstNameError('');
                }
                break;
            case 'lastname':
                setLastName(value);
                if (value.length < 3) {
                    setLastNameError(t('error.lastname'));
                } else {
                    setLastNameError('');
                }
                break;
            case 'email':
                setEmail(value);
                setEmailValid(validateEmail(value));
                if (!validateEmail(value)) {
                    setEmailError(t('error.email'));
                } else {
                    setEmailError('');
                }
                break;
            case 'message':
                setMessage(value);
                if (value.length < 3) {
                    setMessageError(t('error.message'));
                } else {
                    setMessageError('');
                }
                break;
            default:
                break;
        }
    };

    const handleReset = () => {
        // Réinitialiser les champs et les messages d'erreur
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setMessageError('');
    };

    const handleSendEmail = () => {
        const subject = `Demande de contat / rensignements de ${firstName} ${lastName}`;
        const body = `Email: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = `mailto:vachet.matthieu@icloud.com?subject=${subject}&body=${body}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Vérifier si tous les champs sont valides avant de soumettre le formulaire
        if (
            firstName.length < 3 ||
            lastName.length < 3 ||
            !validateEmail(email) ||
            message.length < 3
        ) {
            // Afficher un message d'erreur global ou prendre une autre action selon tes besoins
            alert(t('error-submit'));
            return;
        }
        // Ouvrir l'application de messagerie de l'utilisateur avec les informations du formulaire
        handleSendEmail();
    };

    return (
        <div className='contact-form-container'>
            <form className='contact-form-content' onSubmit={handleSubmit}>
                <div className='contact-form-name-container'>
                    <input
                        type='text'
                        name='firstname'
                        placeholder={t('contact.input-firstname')}
                        value={firstName}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='lastname'
                        placeholder={t('contact.input-lastname')}
                        value={lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className='email-input-container'>
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleChange}
                    />
                    {!emailValid && <GrValidate className='email-icon' style={{ color: 'red' }} />}{' '}
                    {/* Affiche l'icône en rouge si l'email n'est pas valide */}
                    {emailValid && email && (
                        <GrValidate className='email-icon' style={{ color: 'green' }} />
                    )}{' '}
                    {/* Affiche l'icône en vert si l'email est valide */}
                </div>
                <textarea
                    type='text'
                    name='message'
                    cols={30}
                    rows={3}
                    placeholder='Message'
                    value={message}
                    onChange={handleChange}
                />
                <div className='error-messages-container'>
                    {firstNameError && <p className='error-message'>{firstNameError}</p>}
                    {lastNameError && <p className='error-message'>{lastNameError}</p>}
                    {emailError && <p className='error-message'>{emailError}</p>}
                    {messageError && <p className='error-message'>{messageError}</p>}
                </div>
                <div className='contact-form-button-container'>
                    <Button
                        className={'contact-form-button'}
                        text={t('contact.button-submit')}
                        type='submit'
                    />
                    <Button
                        className={'contact-form-button'}
                        text={t('contact.button-delete')}
                        type='button'
                        onClick={handleReset}
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
