import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSectionTwo() {
  return (
    <>
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} lg={10}>
            <div className="about-us-info-wrap">
              <div className="section-title-area mb-20">
                <h6 className="section-subtitle ltn__secondary-color">
                  Building Facilities
                </h6>
                <h1 className="section-title">
                  Designed for Comfort, Built to Inspire
                </h1>
                <p>
                  At Haji Mukhtar Properties, we believe in creating more than just homes —
                  we design living spaces that elevate lifestyles. Our developments are a
                  blend of aesthetic beauty, thoughtful planning, and practical luxury,
                  crafted to meet the modern homeowner’s needs.
                </p>
              </div>

              <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix d-inline-block text-start mx-auto">
                <li><i className="icon-done"></i> Spacious living rooms pre-wired for smart home integration</li>
                <li><i className="icon-done"></i> Elegant interiors with premium finishes and fittings</li>
                <li><i className="icon-done"></i> Prime locations close to urban conveniences and serene surroundings</li>
                <li><i className="icon-done"></i> Private balconies with panoramic city and ocean views</li>
                <li><i className="icon-done"></i> Inspired architectural designs that reflect contemporary elegance</li>
                <li><i className="icon-done"></i> Landscaped outdoor spaces with relaxation and entertainment areas</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionTwo;
