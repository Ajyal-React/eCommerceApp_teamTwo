import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import { InnerContainer, FullContainer, SupTitle, Title } from "../../Global.style";
import ProductCard from "../Card/ProductCard/ProductCard";
import Base from "../../images/Base.png";
import Games from "../../images/Games.png";
import Mac from "../../images/Mac.png";
import BackBag from "../../images/BackBag.png";
import { CustomBtn } from "./SlickSlider.Style";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export default function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "btnSlider",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const arr = [
    { name: "Smart Watch", img: Base },
    { name: "Games Arm", img: Games },
    { name: "Mac Laptop", img: Mac },
    { name: "Back Bag", img: BackBag },
    { name: "Smart Watch", img: Base },
    { name: "Games Arm", img: Games },
    { name: "Mac Laptop", img: Mac },
    { name: "Back Bag", img: BackBag },
    { name: "Smart Watch", img: Base },
  ];
  return (
    <FullContainer>
      <InnerContainer>
        <SupTitle>DEVICES</SupTitle>
        <Title>FEATURED PRODUCTS</Title>
      </InnerContainer>
      <Slider {...settings}>
        {arr.map((element) => (
          <ProductCard src={element.img} name={element.name} />
        ))}
      </Slider>
      <CustomBtn>View More</CustomBtn>
    </FullContainer>
  );
}
