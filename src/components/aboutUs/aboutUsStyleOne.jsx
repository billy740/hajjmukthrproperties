import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsStyleOne({ sectionSpace }) {
  return (
    <div className={`ltn__about-us-area ${sectionSpace}`}>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="about-us-info-wrap text-center centered-content">
              <div className="section-title-area mb-20">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Your Trusted Real Estate Partner in Mombasa<span>.</span>
                </h1>
                <p>
                  <strong>Haji Mukhtar Properties and Petroleum Limited</strong> is a leading real estate company based in Mombasa, Kenya. 
                  With a solid reputation built on trust and experience, we specialize in property sales, rentals, and management across the coastal region.
                  <br /><br />
                  We proudly serve clients looking for residential and commercial properties in prime areas including <strong>Nyali, Kizingo, Tudor, Bamburi, Likoni</strong>, and many more.
                  Our team is committed to offering exceptional service, whether you're searching for your dream home, investing in property, or seeking reliable property management solutions.
                </p>
              </div>
              <ul className="ltn__list-item-half clearfix justify-content-center">
                <li>
                  <i className="flaticon-home-2"></i>
                  Wide Range of Property Listings
                </li>
                <li>
                  <i className="flaticon-mountain"></i>
                  Strategic Coastal Locations
                </li>
                <li>
                  <i className="flaticon-heart"></i>
                  Dedicated Customer Support
                </li>
                <li>
                  <i className="flaticon-secure"></i>
                  Secure and Transparent Deals
                </li>
              </ul>
              <div className="ltn__callout bg-overlay-theme-05 mt-30">
                <p>
                  We don’t just offer properties — we help you find a place you can truly call home or a valuable asset for your future.
                </p>
              </div>
              <div className="btn-wrapper animated mt-3">
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
