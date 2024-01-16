import './style.scss';
import Logo from '../../assets/images/LogoM.svg';
import { IoSunnyOutline } from "react-icons/io5";


export default function Header() {
    return (
        <header>
            <img className='logo_header' src={Logo} alt='logo' />
            <div className="button_header">
                <button className='button_fr'>
                    <span className='text_fr'>FR</span>
                </button>
                <button className='button_en'>
                    <span className='text_en'>EN</span>
                </button>
                <a className='button_sun'><IoSunnyOutline /></a>
            </div>
        </header>
    );
}
