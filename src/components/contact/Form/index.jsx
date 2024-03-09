/**
 * Composant de formulaire de contact.
 *
 * Ce composant gère un formulaire de contact avec des champs pour le prénom, le nom, l'email et le message.
 * Il utilise des hooks d'état pour gérer les valeurs des champs et leurs états de validation.
 * Il utilise également le hook useTranslation de la bibliothèque react-i18next pour la traduction des messages d'erreur et de succès.
 *
 * @component
 */

/* Importation des modules */
import { useState } from 'react';

/* Importation des données */
import { useTranslation } from 'react-i18next';

/* Importation des composants */
import Button from '../../button';
import { toast } from 'sonner';

/* Importation des assets */
import { GrValidate } from 'react-icons/gr';

/* Importation du style */
import './style.scss';

export default function ContactForm() {
    /* Etats des champs du formulaire */
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    /* Etats de validation pour le mail */
    const [emailValid, setEmailValid] = useState(true);
    /* Etats des messages d'erreur */
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    /* Etats de validation pour les champs */
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);
    const [isLastNameValid, setIsLastNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isMessageValid, setIsMessageValid] = useState(false);
    /* Etats de succès pour les messages */
    const [firstNameSuccessShown, setFirstNameSuccessShown] = useState(false);
    const [lastNameSuccessShown, setLastNameSuccessShown] = useState(false);
    const [emailSuccessShown, setEmailSuccessShown] = useState(false);
    const [messageSuccessShown, setMessageSuccessShown] = useState(false);

    const { t } = useTranslation();

    /**
     * Valide une adresse email.
     *
     * Cette fonction utilise une expression régulière pour vérifier si l'adresse email est valide.
     *
     * @param {string} email - L'adresse email à valider.
     * @returns {boolean} `true` si l'adresse email est valide, `false` sinon.
     */

    const validateEmail = (email) => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return pattern.test(email);
    };

    /**
     * Gère les changements de valeur des champs du formulaire.
     *
     * @param {Object} e - L'événement de changement.
     */

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstname':
                setFirstName(value);
                if (value.length < 3) {
                    toast.warning(t('error.firstname'));
                    setIsFirstNameValid(false);
                    setFirstNameSuccessShown(false);
                } else {
                    setFirstNameError('');
                    setIsFirstNameValid(true);
                    if (!firstNameSuccessShown) {
                        toast.success(t('success.firstname'));
                        setFirstNameSuccessShown(true);
                    }
                }
                break;
            case 'lastname':
                setLastName(value);
                if (value.length < 3) {
                    toast.warning(t('error.lastname'));
                    setIsLastNameValid(false);
                    setLastNameSuccessShown(false);
                } else {
                    setLastNameError('');
                    setIsLastNameValid(true);
                    if (!lastNameSuccessShown) {
                        toast.success(t('success.lastname'));
                        setLastNameSuccessShown(true);
                    }
                }
                break;
            case 'email':
                setEmail(value);
                setEmailValid(validateEmail(value));
                if (!validateEmail(value)) {
                    toast.warning(t('error.email'));
                    setIsEmailValid(false);
                    setEmailSuccessShown(false);
                } else {
                    setEmailError('');
                    setIsEmailValid(true);
                    if (!emailSuccessShown) {
                        toast.success(t('success.email'));
                        setEmailSuccessShown(true);
                    }
                }
                break;
            case 'message':
                setMessage(value);
                if (value.length < 3) {
                    toast.warning(t('error.message'));
                    setIsMessageValid(false);
                    setMessageSuccessShown(false);
                } else {
                    setMessageError('');
                    setIsMessageValid(true);
                    if (!messageSuccessShown) {
                        toast.success(t('success.message'));
                        setMessageSuccessShown(true);
                    }
                }
                break;
            default:
                break;
        }
    };

    /**
     * Réinitialise tous les champs du formulaire et leurs états de validation.
     */

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setMessageError('');
        setIsFirstNameValid(false);
        setIsLastNameValid(false);
        setIsEmailValid(false);
        setIsMessageValid(false);
        setFirstNameSuccessShown(false);
        setLastNameSuccessShown(false);
        setEmailSuccessShown(false);
        setMessageSuccessShown(false);
        toast.success(t('success.reset'));
    };

    /**
     * Prépare un lien mailto avec le sujet et le corps du message remplis avec les valeurs des champs du formulaire, puis redirige le navigateur vers ce lien.
     */

    const handleSendEmail = () => {
        const subject = `Demande de contact / renseignements de ${firstName} ${lastName}`;
        const body = `Email: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = `mailto:vachet.matthieu@icloud.com?subject=${subject}&body=${body}`;
    };

    /**
     * Est appelée lorsque le formulaire est soumis.
     * Elle vérifie si tous les champs sont valides et, si c'est le cas, appelle la fonction handleSendEmail.
     *
     * @param {Object} e - L'événement de soumission.
     */

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isMessageValid) {
            toast.error(t('error.submit'));
            return;
        }
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
                    {emailValid && email && (
                        <GrValidate className='email-icon' style={{ color: 'green' }} />
                    )}
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
}
