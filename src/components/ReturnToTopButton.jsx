import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ReturnToTopButton = (props) => {
    return ( 
        <button type="button" 
                className="btn btn-primary"
                id="return-to-top"
                style={{display: props.yOffset > 50 ? "block" : "none"}}
                onClick={() => {scroll.scrollToTop({duration: 200})}}>
                <i className="fa fa-chevron-up"></i>
        </button>
    );
}

export default ReturnToTopButton;