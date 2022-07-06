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
} from "./CartCard.Style";
import img from "./../../../images/BackBag.png";
import { useSelector } from "react-redux";

export default function CartCard() {
  const dataStore = useSelector((store) => store);
  console.log(dataStore);
  return (
    <ContainerCartCard>
      <LeftBox>
        <ContainerImage>
          <Image src={img} alt="not found" />
        </ContainerImage>
        <InnerContainer>
          <ProductName>Laptop Bag</ProductName>
          <ContainerCounter>
            <MinusIcon />
            <Quantity>1</Quantity>
            <PlusIcon />
          </ContainerCounter>
        </InnerContainer>
      </LeftBox>
      <RightBox>
        <ProductPrice>$98</ProductPrice>
        <CloseIcon />
      </RightBox>
    </ContainerCartCard>
  );
}
