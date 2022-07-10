import {
  SSlider,
  Sale,
  SliderItem,
  ProductName,
  Name,
  Price,
  Text,
  Brand,
  ContainerImage,
} from "./index.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetFC } from "../../redux/FeaturedCategories/FCAction";
import { Image } from "../../Global.style";

const TopSliderSection = () => {
  const {images} = useSelector((state) => state?.FCReducer?.FCProducts[0]);
  console.log(images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFC());
  }, [dispatch]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <SSlider>
      <Sale>SALE -50%</Sale>
      <SliderItem>
        <Slider {...settings}>
          {images?.map((srcImg) => (
            <ContainerImage>
              {console.log(srcImg)}
              <Image src={srcImg} width="100%" height={"100%"} />
            </ContainerImage>
          ))}
        </Slider>
      </SliderItem>
      <ProductName>
        <Name>HP LAPTOP</Name>
        <Price>$99</Price>
      </ProductName>
      <ProductName>
        <Brand>Brand: Nike</Brand>
        <Text>139.00$</Text>
      </ProductName>
    </SSlider>
  );
};

export default TopSliderSection;
