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
} from "./CartCard.Style";
import img from "./../../../images/BackBag.png";
export default function CartCard() {
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
      <RightBox></RightBox>
    </ContainerCartCard>
  );
}
