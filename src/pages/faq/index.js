import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaSearch,
  FaRegEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";
import Slider from "react-slick";
import { productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import CounterUp from "@/components/counterUp";

function Faq() {
  const [isOpen, setOpen] = useState(false);

  // FAQ Data (Replace with your content)
  const faqData = [
    {
      id: "1",
      question: "What services does Haji Mukhtar Properties offer?",
      answer:
        "Haji Mukhtar Properties & Petroleum Ltd. specializes in real estate development, property sales, rentals, and fuel distribution services. Whether you're looking to invest in land, buy a house, rent a commercial space, or fuel your business — we have a tailored solution for you.",
    },
    {
      id: "2",
      question: "How can I book a property for viewing?",
      answer: (
        <>
          You can book a property viewing by visiting our{" "}
          <Link href="/contact">Contact Page</Link> or calling us directly at{" "}
          <strong>+254 720 655 444</strong>. One of our agents will arrange a convenient time.
        </>
      ),
    },
    // Add other FAQs here...
  ];

  // Slider Arrows
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-label="Previous slide"
      aria-disabled={currentSlide === 0}
    >
      <FaArrowLeft />
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-label="Next slide"
      aria-disabled={currentSlide === slideCount - 1}
    >
      <FaArrowRight />
    </button>
  );

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <LayoutOne topbar={true}>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="LjCzPp-MK48"
        onClose={() => setOpen(false)}
      />
      <ShopBreadCrumb
        title="Frequently asked questions"
        sectionPace=""
        currentSlug="About UsFAQ"
      />

      {/* FAQ Section */}
      <div className="ltn__faq-area mb-100">
        <div className="container">
          <Row>
            <Col xs={12} lg={8}>
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <Accordion defaultActiveKey="1">
                  {faqData.map((faq) => (
                    <Accordion.Item key={faq.id} eventKey={faq.id}>
                      <Accordion.Header>{faq.question}</Accordion.Header>
                      <Accordion.Body>{faq.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>

                <div className="need-support text-center mt-100">
                  <h2>Still need help? Our team is here to assist you.</h2>
                  <div className="btn-wrapper mb-30">
                    <Link href="/contact" className="theme-btn-1 btn">
                      Get in Touch
                    </Link>
                  </div>
                  <h3 className="d-flex align-items-center justify-content-center gap-2">
                    <FaPhoneAlt className="me-2" />
                    <a href="tel:+254720655444" className="text-dark">
                      +254 720 655 444
                    </a>
                  </h3>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              {/* Sidebar (Newsletter & Banner) */}
              <aside className="sidebar-area ltn__right-sidebar">
                <div className="widget ltn__search-widget ltn__newsletter-widget">
                  <h6 className="ltn__widget-sub-title">// subscribe</h6>
                  <h4 className="ltn__widget-title">Get Newsletter</h4>
                  <form action="#">
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                  <div className="ltn__newsletter-bg-icon">
                    <FaRegEnvelopeOpen />
                  </div>
                </div>
                <div className="widget ltn__banner-widget">
                  <Link href="/shop">
                    <img src="/img/banner/banner-3.jpg" alt="Banner" />
                  </Link>
                </div>
              </aside>
            </Col>
          </Row>
        </div>
      </div>

      {/* Counter & Blog Sections (Keep existing) */}
      <CounterUp />
      <div className="ltn__blog-area pt-120 pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "News & Blogs",
                  title: "Latest News Feeds",
                }}
              />
            </Col>
          </Row>
          <Slider {...blogSettings} className="ltn__blog-slider-one-active">
            {blogData.map((data, key) => (
              <BlogItem
                key={key}
                baseUrl="blog"
                data={data}
                slug={productSlug(data.title)}
              />
            ))}
          </Slider>
        </Container>
      </div>

      {/* Call-to-Action */}
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
  );
}

export default Faq;