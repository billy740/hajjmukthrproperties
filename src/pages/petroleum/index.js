import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Contact from "@/components/contact";

function ContactUs() {
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="Petroleum Services"
          sectionPace=""
          currentSlug="Petroleum Services"
        />

        <section className="pt-5 pb-5">
          <Container>
            <Row>
              <Col>
                <h2 className="mb-4">Official Soft Corporate Offer</h2>
                <p><strong>Contract Duration:</strong> 11th December 2024 – 10th December 2025</p>

                <p>We proudly supply premium-grade petroleum products worldwide under a competitive and secure FOB/CIF agreement. Below is our currently available inventory with pricing and commission breakdowns.</p>

                <h4 className="mt-4">Available Petroleum Products</h4>

                <ul>
                  <li><strong>Jet Fuel Colonial Grade 54:</strong> 1M–5M BBL/month | FOB $76 NET | Commission: $1 (Buyer + Seller)</li>
                  <li><strong>Jet Fuel A1 (Colonial):</strong> 1M–5M BBL/month | FOB $76 NET | Commission: $1 (Buyer + Seller)</li>
                  <li><strong>Virgin Fuel Oil D6:</strong> 100M–500M Gallons/month | FOB $0.78 NET | Commission: $0.10 (Buyer + Seller)</li>
                  <li><strong>Ultra Low Sulphur Diesel EN590 (10/50 PPM):</strong> 50K–500K MT/month | FOB $540 NET | CIF $550 NET | Commission: $5 (Buyer + Seller)</li>
                  <li><strong>D2 Diesel Gasoil (L-02-62 GOST):</strong> 50K–500K MT/month | FOB $560 NET | CIF $550 NET | Commission: $5 (Buyer + Seller)</li>
                  <li><strong>AGO (Automatic Gasoil):</strong> 50K–500K MT/month | CIF $500 NET | Commission: $5 (Buyer + Seller)</li>
                  <li><strong>ESPO:</strong> 1M–5M BBL/month | FOB $64 NET | CIF $66 NET | Commission: $1 (Buyer + Seller)</li>
                  <li><strong>LPG (Liquefied Petroleum Gas):</strong> 50K–500K MT/month | CIF $240 NET | Commission: $5 (Buyer + Seller)</li>
                  <li><strong>LNG (Liquefied Natural Gas):</strong> 50K–500K MT/month | CIF $240 NET | Commission: $5 (Buyer + Seller)</li>
                  <li><strong>LCO (Light Cycle Oil):</strong> 50K–500K MT/month | CIF $240 NET | Commission: $5 (Buyer + Seller)</li>
                  <li><strong>Mazut M100 (GOST 10585-75/99):</strong> 50K–500K MT/month | CIF $240 NET | Commission: $5 (Buyer + Seller)</li>
                </ul>

                <p className="mt-3">To request product specifications, initiate a purchase procedure, or submit an LOI, please contact our team using the form below or through the contact information provided.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <Contact />

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default ContactUs;
