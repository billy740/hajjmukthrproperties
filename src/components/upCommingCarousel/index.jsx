import { Col, Row } from "react-bootstrap";
import Link from "next/link";

const UpCommingcarousel = () => {
  return (
    <Row className="ltn__upcoming-project-item">
      <Col xs={12} lg={7}>
        <div className="ltn__upcoming-project-img">
          <img src="/img/others/zuri pic 1.jpg" alt="Azure Apartments" />
        </div>
      </Col>
      <Col xs={12} lg={5} className="section-bg-1">
        <div className="ltn__upcoming-project-info ltn__menu-widget">
          <h6 className="ltn__secondary-color">About Project</h6>
          <h1>Azure Apartments</h1>
          <ul>
            <li>
              1. Project Name: <span>Azure Apartments</span>
            </li>
            <li>
              2. Project Type: <span>2 and 3 Bedroom Apartments</span>
            </li>
            <li>
              3. Building Location: <span>Ganjoni, Mombasa</span>
            </li>
            <li>
              4. No. Of Apartments: <span>20+</span>
            </li>
          </ul>
         
        </div>
      </Col>
    </Row>
  );
};

export default UpCommingcarousel;
