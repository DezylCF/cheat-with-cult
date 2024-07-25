import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Cheat Meal Suggester. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
