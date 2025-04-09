import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = function () {
  return (
    <footer className="ltn__footer-area">
      <div className="footer-top-area section-bg-2 plr--5">
        <Container fluid>
          <Row>
            <Col xs={12} sm={6} xl={4}>
              <div className="footer-widget footer-about-widget">
                <div className="footer-logo mb-3">
                  <div className="site-logo">
                    <img src="/img/mhktarlogo.png" alt="Logo" />
                  </div>
                </div>
                <p>
                  Haji Mukhtar Properties and Petroleum Ltd is a leading real estate firm 
                  offering top-tier properties across Mombasa. From residential to commercial, 
                  we help you find the perfect space in prime coastal locations.
                </p>
                <div className="footer-address mt-20">
                  <ul>
                    <li>
                      <div className="footer-address-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="footer-address-info">
                        <p>Mombasa, Kenya</p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <FaPhoneAlt />
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <Link href="tel:+254 720655444">+254 720655444</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <FaEnvelope />
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <Link href="mailto:  hajjmukhtarproperties@gmail.com">
                            hajjmukhtarproperties@gmail.com
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </div>
            </Col>

            <Col xs={12} sm={6} xl={4}>
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Quick Links</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/properties">Properties</Link>
                    </li>
                    <li>
                      <Link href="/services">Our Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li>
                    <li>
                      <Link href="/locations">Locations</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={6} xl={4}>
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Why Choose Us</h4>
                <div className="footer-menu">
                  <ul>
                    <li>Trusted Local Expertise</li>
                    <li>Strategically Located Properties</li>
                    <li>Professional Support & Guidance</li>
                    <li>Secure and Transparent Deals</li>
                    <li>Customer-Centric Approach</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ltn__copyright-area section-bg-7 plr--5">
        <div className="container-fluid ltn__border-top-2">
          <Row>
            <Col xs={12} md={6}>
              <div className="ltn__copyright-design">
                <p>
                  © {new Date().getFullYear()} Haji Mukhtar Properties and Petroleum Ltd. All Rights Reserved.
                </p>
              </div>
            </Col>
           
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
