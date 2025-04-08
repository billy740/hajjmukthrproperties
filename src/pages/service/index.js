import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { getProducts } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import AboutUsStyletwo from "@/components/aboutUs/aboutUsStyleTwo";
import Feature from "@/components/features";
import featureData from "@/data/service";

function Service() {
  const services = getProducts(featureData, "buying", "featured", 6);

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="What We Do"
          sectionPace=""
          currentSlug="Service"
        />

        <AboutUsStyletwo sectionSpace="pb-90" />

        <Feature
          classes="section-bg-1"
          servicebtn={false}
          iconTag={true}
          headingClasses="section-subtitle-2"
          data={services}
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Our Services",
            title: "Our Core Services",
          }}
        />

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

export default Service;
