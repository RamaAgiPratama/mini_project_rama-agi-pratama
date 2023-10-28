import React, { useState } from "react";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import FeaturedTourList2 from "../components/Featured-tours/FeaturedTourList2";

const SearchResultList = () => {
  return (
    <>
      <CommonSection title={"Pencarian Items"} />
      <section>
        <Container>
          <Row>
            <FeaturedTourList2 />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
