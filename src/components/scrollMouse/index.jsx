import './style.scss';

export default function ScrollMouse() {
    return (
        <>
            <div className='scroll-downs'>
                <div className='mousey'>
                    <div className='scroller'></div>
                </div>
            </div>
            <span>Scroll me</span>
        </>
    );
}
