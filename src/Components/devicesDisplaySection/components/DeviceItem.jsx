import React from "react";

import { FlexBox, Image } from "../../../Global.style";
import { Item, FlexEnd } from "./DeviceItem.style";
import { LabName, LabPrice, ImageBox } from "../DevicesDisplaySection.style";
// import SecondImage from "../../../images/MG.png";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { AiFillStar } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";

function DeviceItem(props) {
  return (
    <Item>
      <FlexEnd>
        <FaHeart color="#BDBDBD" />
      </FlexEnd>
      <ImageBox>
        <Image src={props.images} width="200px" height="200px" alt="" />
      </ImageBox>
      <div>
        <FlexBox>
          <LabName>{props.name}</LabName>
          <LabPrice>${props.price}</LabPrice>
        </FlexBox>
      </div>
      <hr />
      <div>
        <FlexBox>
          <AiFillStar color="yellow" />
          <AiFillStar color="yellow" />
          <AiFillStar color="yellow" />
          <AiFillStar color="yellow" />
          <AiFillStar color="yellow" />
          <p>({props.rating})</p>
          <IconContext.Provider
            value={{ color: "#BDBDBD", backgroundColor: "#BDBDBD" }}
          >
            <div>
              <BsCartFill />
            </div>
          </IconContext.Provider>
        </FlexBox>
      </div>
    </Item>
  );
}

export default DeviceItem;
