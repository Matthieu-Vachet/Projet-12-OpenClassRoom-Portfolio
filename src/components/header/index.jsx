import './style.scss';
import Logo from '../../assets/images/LogoM.svg';

export default function Header() {
    return (
        <header>
            <img className='logo_header' src={Logo} alt='logo' />
        </header>
    );
}
