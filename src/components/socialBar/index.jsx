import './style.scss'

// Importing icons from react-icons
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";



function SocialBar() {
    return (
        <div className="socialBar">
            <img className='social_top_bar' src='../../../public/Line 1.svg'></img>
            <a className='social_link' href="#" target='_blank'><FaLinkedin/></a>
            <a className='social_link' href="#" target='_blank'><FaTwitterSquare/></a>
            <a className='social_link' href="#" target='_blank'><FaGithubSquare/></a>
            <a className='social_link' href="#" target='_blank'><IoLogoDiscord/></a>
            <img className='social_bottom_bar' src='../../../public/Line 2.svg'></img>
        </div>
    )
}

export default SocialBar;