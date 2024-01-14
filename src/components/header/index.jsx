import './style.scss';
import Logo from "../../../public/images/LogoM.svg";


function Header() {
    return (
        <header>
            <img className="logo_header" src={Logo} alt="logo" />
        </header>
    );
    }

export default Header;