import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Img from 'gatsby-image';

const ProjectImageModal = (props) => {
    return (
        <Modal size="xl" 
               show={props.show}
               onHide={props.handleClose}
               animation={true}
               className="text-center"
               centered >
            <Modal.Header closeButton/>
            <Modal.Body>
                { typeof(props.src) == 'object' && <Img fluid={props.src} /> ||
                  <Image src={props.src} fluid/> }
            </Modal.Body>
        </Modal>
    );
}

export default ProjectImageModal;