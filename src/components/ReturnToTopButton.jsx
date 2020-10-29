import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ReturnToTopButton = (props) => {
    return ( 
        <button type="button" 
                className="btn btn-primary"
                id="return-to-top"
                style={{display: props.yOffset > 50 ? "block" : "none"}}
                onClick={() => {scroll.scrollToTop({duration: 200})}}>
                <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
}

export default ReturnToTopButton;