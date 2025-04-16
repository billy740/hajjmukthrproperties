import { useState } from "react";
import Slider from "react-slick";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import Feature from "@/components/features";
import featuresData from "@/data/service";
import HeroSectionStyleTwo from "@/components/hero/styleTwo";
import AboutUsSectionOne from "@/components/aboutUs/aboutUsSectionOne";
import AboutUsSectionTwo from "@/components/aboutUs/aboutUsSectionTwo";
import UpCommingcarousel from "@/components/upCommingCarousel";
import PropertyItem from "@/components/product/properties";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import AminitiesItemTwo from "@/components/aminities/itemTwo";
import aminitiesData from "@/data/aminities/index.json";
import TestimonialCarouselItemTwo from "@/components/testimonialCarousel/indexTwo";
import testimonialData from "@/data/testimonial";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import heroData from '@/data/hero/index-two.json';


function HomeVersionTwo(props) {
  const [isOpen, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const countryProducts = getProducts(products, "buying", "country", 5);
  const { data } = props;



  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
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
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const testiMonialsettings = {
    arrows: true,
    dots: false,
    centerMode: false,
    centerPadding: '80px',
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



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
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LayoutOne topbar={false}>

      
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <div className="ltn__slider-area ltn__slider-11 section-bg-1">
        <HeroSectionStyleTwo data={heroData} />
      </div>
      {/* <!-- SLIDER AREA END -->

    <!-- ABOUT US AREA START --> */}
      <div className="ltn__about-us-area pt-115 pb-100 ">
        <AboutUsSectionOne />
      </div>
      {/* <!-- ABOUT US AREA END -->

    <!-- ABOUT US AREA START --> */}
      <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90">
        <AboutUsSectionTwo />
      </div>
      {/* <!-- ABOUT US AREA END -->

    <!-- FEATURE AREA START ( Feature - 6) --> */}
      <Feature
        servicebtn={true}
        iconTag={false}
        data={featureData}
        classes=""
        headingClasses=""
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />
      {/* <!-- FEATURE AREA END -->

    <!-- UPCOMING PROJECT AREA START --> */}
      <div
        className="ltn__upcoming-project-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/others/zuri pic 2.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Upcoming Projects
                </h6>
                <h1 className="section-title  white-color">
                  Dream Living Space <br />
                  Setting New Standards
                </h1>
              </div>
            </Col>
          </Row>
          <UpCommingcarousel />

        </Container>
      </div>
      {/* <!-- UPCOMING PROJECT AREA END -->

    <!-- APARTMENTS PLAN AREA START --> */}

      {/* <div className="ltn__apartments-plan-area pb-70">
        <Container>
          <Row>
            <Col>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  subTitle: "Apartment Sketch",
                  title: "Apartments Plan",
                  additionalClassName: "",
                }}
              />

              <Tab.Container defaultActiveKey="first">
                <div className="ltn__tab-menu ltn__tab-menu-3 text-center">
                  <Nav className="nav justify-content-center">
                    <Nav.Link eventKey="first">Tudor pearl</Nav.Link>
                    <Nav.Link eventKey="second">Starshine</Nav.Link>
                    <Nav.Link eventKey="third">Moonlight</Nav.Link>
                    <Nav.Link eventKey="fourth">Azure</Nav.Link>
                    <Nav.Link eventKey="five"> Jameel Twin Tower</Nav.Link>
                  </Nav>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__apartments-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>The Studio</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="ltn__product-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>Deluxe Portion</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="ltn__product-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>Penthouse</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="ltn__product-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>Top Garden</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="five">
                    <div className="ltn__product-tab-content-inner">
                      <Row>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-info section-bg-1">
                            <h2>Double Height</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label>
                                  <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label>
                                  <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label>
                                  <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={6}>
                          <div className="apartments-plan-img">
                            <img src="/img/others/10.png" alt="#" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div> */}
      {/* <!-- APARTMENTS PLAN AREA END -->

    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      <div
        className="ltn__search-by-place-area before-bg-top pt-115 pb-70"


      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Area Properties
                </h6>
                <h1 className="section-title">
                  Find Your Dream House <br />
                  
                </h1>
              </div>
            </Col>
          </Row>

          {!!countryProducts?.length ? (
            <Slider
              {...productsettings}
              className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
            >
              {countryProducts.map((product, key) => {
                const slug = productSlug(product.title);

                return (
                  <PropertyItem
                    key={key}
                    product={product}
                    slug={slug}
                    baseUrl="/shop"
                  />
                );
              })}
            </Slider>
          ) : null}




        </Container>
      </div>
      {/* <!-- SEARCH BY PLACE AREA END -->

    <!-- SELECT AVAILABILITY AREA START --> */}
      {/* <div className="select-availability-area pb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Avialable Spaces
                </h6>
                <h1 className="section-title">Select Availability</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="ltn__select-availability-table-wrap">
                <div className="ltn__select-availability-table d-none d-md-block">
                  <ul className="ltn__select-availability-table-head">
                    <li>Residence</li>
                    <li>Bedrooms</li>
                    <li>Bathroom</li>
                    <li>SQ.FT </li>
                    <li>Rent Price</li>
                    <li>Details</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                </div>
                <div className="ltn__select-availability-table-responsive d-md-none">
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      {/* <!-- SELECT AVAILABILITY AREA END -->

    <!-- NEIGHBOUR AREA START --> */}
      <div className="neighbour-area section-bg-1 pt-118 pb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Explore Neighbour
                </h6>
                <h1 className="section-title">
                  What’s In Neighbour <br />
                  Explore Below
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="ltn__neighbour-tab-wrap">

                <Tab.Container defaultActiveKey="first">
                  <div className="ltn__tab-menu ltn__tab-menu-4 text-center">
                   

                  </div>
                 
                </Tab.Container>
              </div>
              <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                <Row>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-mortarboard"></i> University /
                          College
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>
      Conveniently located near top-tier universities and colleges, our properties offer families and students a unique advantage. Enjoy quick commutes, a vibrant academic environment, and access to world-class education — all while residing in a peaceful, well-planned neighborhood.
    </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title"><i className="flaticon-hospital"></i> Medical Hospital</Accordion.Header>
                        <Accordion.Body>
                         
                          <p>
      Live with peace of mind knowing that leading hospitals and medical centers are just minutes away. Whether it’s for routine check-ups or emergencies, access to quality healthcare is always within reach — ensuring the safety and well-being of your loved ones.
    </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-metro"></i> Railway Station
                        </Accordion.Header>
                        <Accordion.Body className="card-body">
                        <p>
      Seamlessly connect to major cities and destinations via nearby railway stations. Perfect for professionals and frequent travelers, this access provides unmatched convenience and mobility — making travel smooth, efficient, and stress-free.
    </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-building"></i> Shopping Mall
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>
      Indulge in retail therapy with premier shopping malls just a short drive away. From high-end brands to daily essentials, enjoy a dynamic shopping experience complete with entertainment zones, fine dining, and fashion-forward outlets.
    </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-airplane"></i> Airport
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>
      Whether for business or leisure, our properties’ proximity to the airport ensures that you are always well-connected to global destinations. Skip the long commutes and enjoy the luxury of quick access to international and domestic flights.
    </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-slider"></i> Children Playland
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>
      Foster joyful childhood memories in safe, vibrant playlands just steps from home. Designed with modern safety standards and creative play zones, these areas allow children to explore, socialize, and grow in a fun and secure environment.
    </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- NEIGHBOUR AREA END -->

    <!-- CATEGORY AREA START --> */}
      <div className="ltn__category-area ltn__product-gutter pt-115 pb-70">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  subTitle: "Our Aminities",
                  title: "Building Aminities",
                  additionalClassName: "",
                }}
              />
            </Col>
          </Row>

          <Row className="slick-arrow-1 justify-content-center">
            {aminitiesData.map((data, key) => {
              return (
                <Col key={key} xs={12} sm={6} md={4} lg={3}>
                  <AminitiesItemTwo data={data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      {/* <!-- CATEGORY AREA END -->


    <!-- TESTIMONIAL AREA START (testimonial-8) --> */}
      <div
        className="ltn__testimonial-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/bg/23.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Clients Testimonial
                </h6>
                <h1 className="section-title white-color">
                  See What Our Client <br />
                  Says About Us
                </h1>
              </div>
            </Col>
          </Row>
          <Slider
            {...testiMonialsettings}
            className="row ltn__testimonial-slider-6-active slick-arrow-3"
          >
            {testimonialData.map((data, key) => {
              return <Col xs={12} lg={4} key={key}><TestimonialCarouselItemTwo data={data} /></Col>;
            })}

            {/* <!--  --> */}
          </Slider>
        </Container>
      </div>
      {/* <!-- TESTIMONIAL AREA END -->

    <!-- BLOG AREA START (blog-3) --> */}
      {/* <div className="ltn__blog-area pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  subTitle: "News & Blogs",
                  title: "Leatest News Feeds",
                }}
              />
            </Col>
          </Row>
          <Slider
            {...blogSettings}
            className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
          >
            {blogData.map((data, key) => {
              const slug = productSlug(data.title);
              return (
                <BlogItem key={key} baseUrl="/blog" data={data} slug={slug} />
              );
            })}
          </Slider>
        </Container>
      </div> */}
      {/* <!-- BLOG AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- CALL TO ACTION END --> */}
    </LayoutOne>
  );
}

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "src/data/hero/", "index-two.json");
//   const data = JSON.parse(await fs.readFile(filePath));

//   return {
//     props: {
//       data,
//     },
//   };
// }
export default HomeVersionTwo;
