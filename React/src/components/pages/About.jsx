import React from "react";
import { Fragment } from "react";
import Practice from "components/practice/Practice";
import { Row, Col, Image } from "react-bootstrap";
import OurMission from "./OurMission";
import FeaturesList from "./FeaturesList";
import { Container } from "react-bootstrap";
import GalleryImage1 from "assets/images/about/party-img-1.jpg";
import GalleryImage2 from "assets/images/about/party-img-2.jpg";
import GalleryImage3 from "assets/images/about/party-img-3.jpg";
import GalleryImage4 from "assets/images/about/party-img-4.jpg";
import GalleryImage5 from "assets/images/about/party-img-5.jpg";
import GalleryImage6 from "assets/images/about/party-img-6.jpg";

const About = () => {
  const GalleryImages = [
    {
      id: 1,
      image: GalleryImage1,
    },
    {
      id: 2,
      image: GalleryImage2,
    },
    {
      id: 3,
      image: GalleryImage3,
    },
    {
      id: 4,
      image: GalleryImage4,
    },
    {
      id: 5,
      image: GalleryImage5,
    },
    {
      id: 6,
      image: GalleryImage6,
    },
  ];
  return (
    <Fragment>
      <Practice></Practice>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} md={12} sm={12} className="mb-12">
          <h1 className="display-2 fw-bold mb-3 caption">
            Welcome, learn more about{" "}
            <span className="text-primary">RumbApp</span>
          </h1>
          <p className="h2 mb-3 para">
            We are RumbApp and we are the hub of all nightlife information near
            you. Maybe you fancy a layed back bar/lounge to celebrate your
            promotion with close friends or maybe you would rather a disco where
            the crowd is lively with great music and drinks. Whatever you are in
            the mood for, we have got you covered.
          </p>
          <p className="mb-0 h4 text-body lh-lg">
            With RumbApp, you will be provided with all the information that you
            need to ensure that you and your friends have the night of your
            lives. You will be given the most up-to date information regarding
            business hours, events, venue profiles, photos, venue description
            and more. Let us be your go-to search engine for all things
            nightlife.
          </p>
        </Col>
      </Row>

      <div className="gallery mb-12">
        {GalleryImages.map((item, index) => {
          return (
            <figure
              className={`gallery__item gallery__item--${item.id} mb-0`}
              key={index}
            >
              <Image
                src={item.image}
                alt="Gallery image 1"
                className="gallery__img rounded-3"
              />
            </figure>
          );
        })}
      </div>

      <div className="py-10 bg-white">
        <Container>
          <OurMission />
        </Container>
      </div>
      <FeaturesList />
    </Fragment>
  );
};
export default About;
