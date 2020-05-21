import React from 'react';
import Badge from 'react-bootstrap/Badge'

const Project = (props) => {
    let title;
    if (props.title) {
            if (props.link) {
                title = <a href={props.link}>{props.title}</a>;
            } else {
                title = props.title
            }
                    
    }
    return(
        <div className="project">
            <h6 className="mb-1">{title}{title && " - "}{props.description} - {props.years}</h6>
            <div>
                {props.stack.map(function(technology) {
                    return <Badge pill className="mr-1 mb-1" variant="primary">{technology}</Badge>
                })}
            </div>
            <ul>
                {props.tasks.map(function(task) {
                    return <li dangerouslySetInnerHTML={{__html: task}} />
                })}
            </ul>
        </div>
    )
};

export default Project;