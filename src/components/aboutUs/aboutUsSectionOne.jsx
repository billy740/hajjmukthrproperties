import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSectionOne() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img src="/img/others/zuri pic 2.jpg" alt="About Us Image" className="img-fluid"/>
            </div>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Dream Living Spaces Setting New Build
                </h1>
                <p>
  Hajj Mukhtar Properties & Petroleum Ltd is a trusted name in real estate and petroleum services, committed to delivering excellence across Kenya. With a strong foundation built on integrity, innovation, and customer satisfaction, we specialize in property development, land sales, and reliable fuel distribution. Our mission is to transform communities by providing quality and affordable solutions in both housing and energy.
</p>

              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-4"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      The Perfect Residency
                    </Link>
                  </h4>
                  <p>
  Discover the best in modern living with our premium residences—designed for comfort, elegance, and convenience. Each unit offers spacious layouts, quality finishes, and a serene environment tailored for your ideal lifestyle.
</p>

                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-call-center-agent"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
  <h4>
    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
      Visionary Real Estate Solutions
    </Link>
  </h4>
  <p>
    At Haji Mukhtar Properties, we combine deep market insight with innovative design to deliver homes that elevate everyday living. From concept to completion, our expert team ensures every property exceeds expectations.
  </p>
</div>

              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-maps-and-location"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
  <h4>
    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
      Built-in Storage Cupboards
    </Link>
  </h4>
  <p>
    Thoughtfully integrated storage solutions that blend seamlessly into the apartment design — keeping your space organized, clutter-free, and effortlessly stylish.
  </p>
</div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionOne;
