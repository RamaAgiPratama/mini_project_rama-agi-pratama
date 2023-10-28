import React from "react";
import TourCard2 from "../../shared/TourCard2";
import tourData from "../../assets/data/tours 2";
import { Col } from "reactstrap";

const FeaturedTourList = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="4" className="mb=4" key={tour.id}>
          <TourCard2 tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
