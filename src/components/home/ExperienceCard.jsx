import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6" className="mb-4">
      <div className="p-4 h-100 border rounded shadow-sm bg-white">
        <div className="d-flex align-items-center mb-3">
          <div
            className="me-3 d-flex align-items-center justify-content-center rounded-circle bg-primary text-white flex-shrink-0"
            style={{ width: 52, height: 52, fontSize: 20 }}
          >
            <i className={`fas ${data.companyLogo || "fa-briefcase"}`} />
          </div>
          <div>
            <h5 className="mb-0 fw-bold">{data.role}</h5>
            <small className="text-muted">{data.date}</small>
          </div>
        </div>
        {data.bullets && data.bullets.length > 0 && (
          <ul className="mb-0 ps-3">
            {data.bullets.map((point, i) => (
              <li key={i} className="text-muted mb-1" style={{ fontSize: "0.92rem" }}>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Col>
  );
};

export default ExperienceCard;
