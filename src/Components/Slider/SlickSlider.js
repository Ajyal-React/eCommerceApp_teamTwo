import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import {
  InnerContainer,
  FullContainer,
  SupTitle,
  Title,
} from "../../Global.style";
import ProductCard from "../Card/ProductCard/ProductCard";
import { CustomBtn } from "./SlickSlider.Style";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProductsAction } from "../../redux/guest/guestActions";

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
  const dataStore = useSelector(store=>store)
  const array = [...dataStore.guestReducer]
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedProductsAction())
  }, [dispatch]);
  return (
    <FullContainer>
      <InnerContainer>
        <SupTitle>DEVICES</SupTitle>
        <Title>FEATURED PRODUCTS</Title>
      </InnerContainer>
      <Slider {...settings}>
        {array?.map((element) => (
          <ProductCard
            src={element.images}
            name={element.name}
            price={element.price}
          />
        ))}
      </Slider>
      <CustomBtn>View More</CustomBtn>
    </FullContainer>
  );
}
