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
// import im from "../../images/BackBag.png";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";
import { GetFC } from "../../redux/FeaturedCategories/FCAction";
import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";

const CardFeaturedCategories = () => {
  const data = useSelector((state) => state?.FCReducer?.FCProducts.filter((e,i)=> i !== 0 ));
  const dispatch = useDispatch();

  // data.filter((e,i)=> i !== 0 )
 console.log(data)
  useEffect(() => {
    dispatch(GetFC());
    // setFeaturedCategories(data);
  }, [dispatch]);
  return (
    <>
      {data?.map((element) => 
        <Card key={element?._id}>
          <Heart>
            <FaHeart />
          </Heart>
          <Image ImageSrc={element?.images} />
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
      )}
    </>
  );
};

export default CardFeaturedCategories;
