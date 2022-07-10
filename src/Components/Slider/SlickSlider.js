import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import {
  InnerContainer,
  FullContainer,
  SupTitle,
  Title,
  CustomLink,
} from "../../Global.style";
import ProductCard from "../Card/ProductCard/ProductCard";
import { CustomBtn } from "./SlickSlider.Style";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export default function SlickSlider({ products }) {
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
    ],
  };

  return (
    <FullContainer>
      <InnerContainer>
        <SupTitle>DEVICES</SupTitle>
        <Title>FEATURED PRODUCTS</Title>
      </InnerContainer>
      <Slider {...settings}>
        {products?.map((element) => (
          <CustomLink key={element?._id} to={`/product/${element?._id}`}>
            <ProductCard
              src={element.images}
              name={element.name}
              price={element.price}
            />
          </CustomLink>
        ))}
      </Slider>
      <CustomBtn>View More</CustomBtn>
    </FullContainer>
  );
}
