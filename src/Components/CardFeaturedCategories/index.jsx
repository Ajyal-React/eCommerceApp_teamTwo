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
  ImageContainer,
} from "./index.style";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";
import { GetFC } from "../../redux/FeaturedCategories/FCAction";
import { useSelector, useDispatch } from "react-redux";

const CardFeaturedCategories = () => {
  const data = useSelector((state) => state?.FCReducer?.FCProducts);
  const dispatch = useDispatch();

  // console.log(data?.slice(0));
  useEffect(() => {
    dispatch(GetFC());
  }, [dispatch]);
  return (
    <>
      {data
        ?.filter((element, index) => index !== 0)
        ?.map((element) => (
          <Card key={element?._id}>
            <Heart>
              <FaHeart />
            </Heart>
            <ImageContainer>
              <Image ImageSrc={element?.images} />
            </ImageContainer>
            <ProductName>
              <Name>{element?.name}</Name>
              <Price>$99</Price>
            </ProductName>
            <ProductReview>
              <Review>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <Number>(5)</Number>
              </Review>
              <Basket>
                <FaCartPlus />
              </Basket>
            </ProductReview>
          </Card>
        ))}
    </>
  );
};

export default CardFeaturedCategories;
