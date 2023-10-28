import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/1.jpg";
import heroVideo from "../assets/images/2.jpg";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagsGallery from "../components/Image-gallery/MasonryImagsGallery";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Enjoy The Nature"} />
                </div>
                <h1>
                  Mandalare Outdoor Equipment{" "}
                  <span className="highlight"> Rent</span>
                </h1>
                <p>
                  Menyewakan Berbagai Macam Peralatan Camping, Haiking, dan
                  Kegiatan Outdoor.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img className="masonry__img" src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img className="masonry__img" src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img className="masonry__img" src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Pelayanan</h5>
              <h2 className="services__title">
                Kami Menawarkan Layanan Terbaik Kami
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="featured__tour-title">Jelajahi Tujuan Anda </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">Kunjungi Galeri Pelanggan Kami</h2>
            </Col>
            <Col lg="12">
              <MasonryImagsGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
