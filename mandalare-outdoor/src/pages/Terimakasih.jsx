import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/terimakasih.css";

const Terimakasih = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="terimakasih">
              <span>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Terimakasih</h1>
              <h3 className="mb-4">
                Atas Penyewaan Alat Camping di Mandalare Outdoor Equipment Rent{" "}
              </h3>
              <Button className="btn primary__btn w-25">
                <Link to="/home">Kembali ke Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Terimakasih;
