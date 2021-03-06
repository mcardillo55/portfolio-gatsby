import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Img from 'gatsby-image';

const ProjectCard = (props) => {
    return(
        <Card className="h-100" onClick={(e) => {if (e.target.tagName === "IMG") {props.image_modal_handler(props.image)} } }>
            { props.image && 
                (typeof(props.image) == 'object' && <Img className={props.image_pad && "card-img-padded"} fluid={props.image} />) ||
                <Card.Img className={props.image_pad && "card-img-padded"} variant="top" src={props.image}/>
            }
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>
                    {props.stack.map(function(technology) {
                        return <Badge pill className="mr-1" variant="primary">{technology}</Badge>
                    })}
                </Card.Subtitle>
                <Card.Text className="mt-1">
                    {props.description}
                </Card.Text>
                <div className="text-center">
                    <Button className="mx-3 btn-card" href={props.source_link} disabled={!props.source_link}>Source</Button>
                    <Button className="mx-3 btn-card" href={props.demo_link} disabled={!props.demo_link}>Demo</Button>
                </div>
            </Card.Body>
        </Card>
    )
};

export default ProjectCard;