import './style.scss';

export default function ScrollMouse() {
    return (
        <div className='scroll-container'>
            <div className='scroll-downs'>
                <div className='mousey'>
                    <div className='scroller'></div>
                </div>
            </div>
            <span className='scroll-text'>Scroll me</span>
        </div>
    );
}
