import React from "react";
import { Image, Price, ProductName } from "../../../Global.style";
import {
  BsArrowRightIcon,
  ContaierProduct,
  ContainerImage,
  MoreInfo,
  TextInnerProduct,
} from "./ProductCard.Style";

export default function ProductCard(props) {
  return (
    <ContaierProduct>
      <ContainerImage>
        <Image src={props.src} width="100%" height={"100%"} />
      </ContainerImage>
      <TextInnerProduct>
          <ProductName>{props.name}</ProductName>
          <Price>{props.price}</Price>
          <MoreInfo>More info <BsArrowRightIcon/></MoreInfo>
        </TextInnerProduct>
    </ContaierProduct>
  );
}
