import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/camp.png";
import guideImg from "../assets/images/camping.png";
import customizationImg from "../assets/images/hiking.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Peralatan Camp",
    desc: "Menyewakan peralatan camping, dan haiking.",
  },
  {
    imgUrl: guideImg,
    title: "Paketan Sewa",
    desc: "Menyediakan peralatan acara atau kegiatan outdoor.",
  },
  {
    imgUrl: customizationImg,
    title: "Jasa Guide",
    desc: "Menerima jasa guide seperti familiy gathering.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
