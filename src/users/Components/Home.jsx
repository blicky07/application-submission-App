// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import { CheckCircleFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ApplyButton = () => {
  return (
    <div className="apply-button">
      <Link to="/apply">
        <Button variant="primary">Apply</Button>
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <header>
        <h1>Curtin Malaysia Graduate School</h1>
      </header>
      <Container>
        <Row>
          <Col className="checklist" sm={6}>
            <CheckCircleFill className="checklist-icon" />
            <h2>When applying for your HDR program, here is what your checklist should look like:</h2>
            <ol>
              <li><strong>HDR Application for submission.</strong></li>
              <li><strong>Curriculum Vitae.</strong></li>
              <li><strong>Degree Certificate.</strong></li>
              <li><strong>Degree Transcript.</strong></li>
              <li><strong>Masters Certificate.</strong></li>
              <li><strong>Masters Transcript.</strong></li>
              <li><strong>English Requirements.</strong></li>
              <li><strong>Recommendation Letter 1.</strong></li>
              <li><strong>Recommendation Letter 2.</strong></li>
              <li><strong>Copy of passport(Int)/Copy of IC(Malaysian).</strong></li>
            </ol>
          </Col>
          <Col className="apply-section" md={6}>
            <ApplyButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
