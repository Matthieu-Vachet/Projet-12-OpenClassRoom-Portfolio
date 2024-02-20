/* Importation des style */
import './style.scss';

const ContactList = () => {
    return (
        <div className='footer-container-col'>
            <h4 className='footer-container-title'>Links</h4>
            <ul className='foofter-list'>
                <li>
                    <a className='footer-text' href='#'>
                        FAQ
                    </a>
                </li>
                <li>
                    <a className='footer-text' href='#'>
                        shipping
                    </a>
                </li>
                <li>
                    <a className='footer-text' href='#'>
                        returns
                    </a>
                </li>
                <li>
                    <a className='footer-text' href='#'>
                        order status
                    </a>
                </li>
                <li>
                    <a className='footer-text' href='#'>
                        payment options
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactList;
