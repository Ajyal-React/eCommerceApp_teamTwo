import React from "react";
import { Image } from "../../../Global.style";
import {
  ContainerCartCard,
  ContainerCounter,
  ContainerImage,
  InnerContainer,
  LeftBox,
  RightBox,
  ProductName,
  MinusIcon,
  PlusIcon,
  Quantity,
  CloseIcon,
  ProductPrice,
  EmptyCart,
} from "./CartCard.Style";
import img from "./../../../images/empty-cart.gif";
import { useSelector } from "react-redux";

export default function CartCard() {
  const cartItems = useSelector((store) => store?.cartReducer?.cart?.items);
  
  return (
    <>
      {cartItems?.length > 0 ? (
        cartItems?.map((element, index) => (
          <ContainerCartCard key={element?.product?._id}>
            <LeftBox>
              <ContainerImage>
                <Image src={element?.product?.images[0]} alt="not found" />
              </ContainerImage>
              <InnerContainer>
                <ProductName>{element?.product?.name} </ProductName>
                <ContainerCounter>
                  <MinusIcon />
                  <Quantity>{element?.qty} </Quantity>
                  <PlusIcon />
                </ContainerCounter>
              </InnerContainer>
            </LeftBox>
            <RightBox>
              <ProductPrice>${element?.product?.price} </ProductPrice>
              <CloseIcon />
            </RightBox>
          </ContainerCartCard>
        ))
      ) : (
        <EmptyCart>
          <Image src={img} alt="Empty cart" />
        </EmptyCart>
      )}
    </>
  );
}
