import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Jumbotron } from "./migration";

const Achievements = ({ heading, data }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <Row>
            {data.map((item, index) => (
              <Col key={index} md="6" lg="4" className="mb-4">
                <div className="p-4 h-100 border rounded shadow-sm text-center bg-light">
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
                    style={{ width: 56, height: 56, fontSize: 22 }}
                  >
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "0.88rem" }}>
                    {item.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Achievements;
