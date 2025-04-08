import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsStyleOne({ sectionSpace }) {
  return (
    <div className={`ltn__about-us-area ${sectionSpace}`}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={10} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area mb-20 text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Trusted Real Estate Experts in the Heart of Mombasa<span>.</span>
                </h1>
                <div className="mx-auto" style={{ maxWidth: "800px" }}>
                  <p>
                    At <strong>Haji Mukhtar Properties and Petroleum Limited</strong>, we don’t just offer properties — we craft seamless experiences for clients seeking to live, invest, or grow in <strong>Mombasa County</strong>.
                    <br /><br />
                    From scenic seafront residences in <strong>Nyali</strong> to bustling commercial spots in <strong>Kizingo, Tudor, Likoni</strong>, and <strong>Bamburi</strong>, our portfolio reflects deep local knowledge and a strong commitment to quality and trust. Whether buying your first home, selling an asset, or renting out property, we walk with you every step of the way.
                  </p>
                </div>
              </div>

              <ul className="ltn__list-item-half clearfix justify-content-center">
                <li>
                  <i className="flaticon-home-2"></i>
                  Extensive Listings Across Mombasa
                </li>
                <li>
                  <i className="flaticon-mountain"></i>
                  Prime Locations in Coastal Neighborhoods
                </li>
                <li>
                  <i className="flaticon-heart"></i>
                  Personalized Client Experience
                </li>
                <li>
                  <i className="flaticon-secure"></i>
                  Transparent & Secure Transactions
                </li>
              </ul>

              <div className="ltn__callout bg-overlay-theme-05 mt-30 text-center">
                <p>
                  Our mission is to connect people with the best places to live, invest, and grow — one property at a time.
                </p>
              </div>

              <div className="btn-wrapper animated text-center mt-3">
                <Link
                  href="/service"
                  className="theme-btn-1 btn btn-effect-1"
                >
                  OUR SERVICES
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUsStyleOne;
