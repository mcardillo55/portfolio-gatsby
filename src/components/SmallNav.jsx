import React from 'react';

const SmallNav = (props) => {
    return (
        <div className="small-nav d-md-none rounded my-1">
            <i className={"fa " + props.faIcon}/> {props.text}
        </div>
    );
}

export default SmallNav;