import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const navigate = useNavigate();

  const searchHandler = () => {
    const location = locationRef.current.value;
    navigate("/tours/search");

    if (location === "") {
      return alert("Masukan kata kunci!");
    }
  };

  return (
    <Col lg="2">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-shopping-cart-2-line"></i>
            </span>
            <div>
              <h6>Cari Item</h6>
              <input
                type="text"
                placeholder="Masukan kata kunci..."
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <span className="search_icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};
export default SearchBar;
