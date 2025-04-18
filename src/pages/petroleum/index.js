import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

const petroleumProducts = [
  {
    title: "Jet Fuel (Jet A1 / Colonial Grade 54)",
    quantity: "1,000,000 – 5,000,000 barrels/month",
    price: "FOB: $78 GROSS / $76 NET",
    commission: "$1 Buyer & $1 Seller per BBL",
  },
  {
    title: "Virgin Fuel Oil D6",
    quantity: "100,000,000 – 500,000,000 gallons/month",
    price: "FOB: $0.80 GROSS / $0.78 NET",
    commission: "$0.1 Buyer & $0.1 Seller per Gallon",
  },
  {
    title: "Ultra Low Sulphur Diesel (EN590)",
    quantity: "50,000 – 500,000 MT/month",
    price: "FOB: $550 GROSS / $540 NET | CIF: $560 GROSS / $550 NET",
    commission: "$5 Buyer & $5 Seller per MT",
  },
  {
    title: "D2 Diesel Gas Oil (L-02-62 GOST 305-82)",
    quantity: "50,000 – 500,000 MT/month",
    price: "FOB: $550 GROSS / $560 NET | CIF: $560 GROSS / $550 NET",
    commission: "$5 Buyer & $5 Seller per MT",
  },
  {
    title: "AGO (Automotive Gas Oil)",
    quantity: "50,000 – 500,000 MT/month",
    price: "CIF: $510 GROSS / $500 NET",
    commission: "$5 Buyer & $5 Seller per MT",
  },
  {
    title: "ESPO Crude Oil",
    quantity: "1,000,000 – 5,000,000 barrels/month",
    price: "CIF: $68 GROSS / $66 NET | FOB: $66 GROSS / $64 NET",
    commission: "$1 Buyer & $1 Seller per BBL",
  },
  {
    title: "LPG (Liquefied Petroleum Gas)",
    quantity: "50,000 – 500,000 MT/month",
    price: "CIF: $250 GROSS / $240 NET",
    commission: "$5 Buyer & $5 Seller per MT",
  },
  {
    title: "LNG (Liquefied Natural Gas)",
    quantity: "50,000 – 500,000 MT/month",
    price: "CIF: $250 GROSS / $240 NET",
    commission: "$5 Buyer & $5 Seller per MT",
  },
  {
    title: "Light Cycle Oil (LCO)",
    quantity: "50,000 – 500,000 MT/month",
    price: "CIF: $250 GROSS / $240 NET",
    commission: "$5 Buyer & $5 Seller per MT",
  },
  {
    title: "Mazut M100 (GOST 10585-75/99)",
    quantity: "50,000 – 500,000 MT/month",
    price: "CIF: $250 GROSS / $240 NET",
    commission: "$5 Buyer & $5 Seller per MT",
  },
];

function ContactUs() {
  return (
    <LayoutOne topbar={true}>
      <ShopBreadCrumb
        title="Petroleum Services"
        sectionPace=""
        currentSlug="Petroleum Services"
      />

      <section className="petroleum-section">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="section-title">Global Petroleum Supply Solutions</h2>
              <p className="section-subtitle">
                Supplying premium petroleum products across the globe—trusted, timely, and transparent.
              </p>
            </Col>
          </Row>
          <Row>
            {petroleumProducts.map((product, index) => (
              <Col lg={6} md={12} key={index} className="product-card">
                <div className="card-inner">
                  <h4>{product.title}</h4>
                  <p><strong>Monthly Supply:</strong> {product.quantity}</p>
                  <p><strong>Price:</strong> {product.price}</p>
                  <p><strong>Commission:</strong> {product.commission}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .petroleum-section {
          padding: 60px 0;
          background: #fff7f0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: #ff6600;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          text-align: center;
          margin-bottom: 2.5rem;
          color: #444;
        }

        .product-card {
          margin-bottom: 30px;
        }

        .card-inner {
          background: #ffffff;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 6px 20px rgba(255, 102, 0, 0.08);
          border: 1px solid #ffe6d5;
          transition: all 0.3s ease;
        }

        .card-inner:hover {
          box-shadow: 0 10px 25px rgba(255, 102, 0, 0.15);
          border-color: #ff6600;
        }

        .card-inner h4 {
          font-size: 1.3rem;
          color: #cc5200;
          margin-bottom: 10px;
        }

        .card-inner p {
          font-size: 0.95rem;
          color: #333;
          margin-bottom: 8px;
        }

        .card-inner strong {
          color: #ff6600;
        }
      `}</style>
    </LayoutOne>
  );
}

export default ContactUs;
