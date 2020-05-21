import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NameHeader = () => {
    return(
      <Row>
          <Col id="name" className="pb-2 mt-4 mb-2 border-bottom text-center" md={12}>
              <h1>Michael Cardillo</h1>
          </Col>
      </Row>
    )
};

export default NameHeader;