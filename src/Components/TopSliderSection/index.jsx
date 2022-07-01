import {
  SSlider,
  Sale,
  SliderItem,
  ProductName,
  Name,
  Price,
  Text,
  Brand,
} from "./index.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../../images/Base1.png'

const TopSliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,autoplay: true,
  };
  return (
    <SSlider>
      <Sale>SALE -50%</Sale>
      <SliderItem>
        <Slider {...settings}>
          <img src={img} />
          <img src={img} />
          <img src={img} />
          <img src={img} />
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
