import React, { useState, useEffect } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ScrollButton.scss';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        window.pageYOffset > 300 ? setVisible(true) : setVisible(false);
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    }, []);

    return (
        <>
            {visible &&
                <div className='icon' onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            }
        </>
    )
}

export default ScrollButton;
