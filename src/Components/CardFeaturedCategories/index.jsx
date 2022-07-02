import {
  Card,
  Heart,
  Image,
  Price,
  Name,
  ProductName,
  Review,
  Basket,
  ProductReview,
  Number,
} from "./index.style";
import { FaHeart } from "react-icons/fa";
import im from "../../images/BackBag.png";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
const CardFeaturedCategories = (props) => {
  return (
    <Card>
      <Heart>
        <FaHeart />
      </Heart>
      <Image ImageSrc={im} />
      <ProductName>
        <Name>{props.productName}</Name>
        <Price>{props.productPrice}</Price>
      </ProductName>
      <ProductReview>
        <Review>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <Number>{props.productReview}</Number>
        </Review>
        <Basket>
          <FaCartPlus />
        </Basket>
      </ProductReview>
    </Card>
  );
};

export default CardFeaturedCategories;
