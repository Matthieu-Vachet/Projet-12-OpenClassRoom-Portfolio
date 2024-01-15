import './style.scss'

// Importing icons from react-icons
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

// Importing line svg
import LineTop from '../../assets/LineTop.svg';
import LineBottom from '../../assets/LineBottom.svg';



export default function SocialBar() {
    return (
        <div className="socialBar">
            <img className='social_top_bar' src={LineTop}></img>
            <a className='social_link' href="#" target='_blank'><FaLinkedin/></a>
            <a className='social_link' href="#" target='_blank'><FaTwitterSquare/></a>
            <a className='social_link' href="#" target='_blank'><FaGithubSquare/></a>
            <a className='social_link' href="#" target='_blank'><IoLogoDiscord/></a>
            <img className='social_bottom_bar' src={LineBottom}></img>
        </div>
    )
}