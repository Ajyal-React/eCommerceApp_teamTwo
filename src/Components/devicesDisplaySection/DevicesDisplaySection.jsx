import React from "react";

import DeviceItem from "./components/DeviceItem";
import { InnerContainer, FlexBox, Button } from "../../Global.style";
import {
  LeftDiv,
  RightDiv,
  LabName,
  LabPrice,
  ParentDivLiftAndRight,
} from "./DevicesDisplaySection.style";
// import Mob from "../../images/MaskGroup41.png";
import CategoriesNav from "../Navbar/CategoriesNav";
import { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedCategories } from "../../redux/guest/guestActions";

function DevicesDisplaySection() {
  const store = useSelector((store) => store?.guestReducer?.categories);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getFeaturedCategories());
  }, [dispach]);


  return (
    <InnerContainer>
      <CategoriesNav />
      {/* FlexBox contain on left and right  */}
      <ParentDivLiftAndRight>
        {/* 50% div in left  */}
        <LeftDiv>
          {/* {store.map((item, index) => ( */}

          <DeviceItem
            name={store[1]?.name}
            price={store[1]?.price}
            images={store[1]?.images}
            rating={store[1]?.rating}
          />
          <DeviceItem
            name={store[2]?.name}
            price={store[2]?.price}
            images={store[2]?.images}
            rating={store[2]?.rating}
          />
          <DeviceItem
            name={store[3]?.name}
            price={store[3]?.price}
            images={store[3]?.images}
            rating={store[3]?.rating}
          />
          <DeviceItem
            name={store[4]?.name}
            price={store[4]?.price}
            images={store[4]?.images}
            rating={store[4]?.rating}
          />
        </LeftDiv>

        {/* 50% div in right  */}
        <RightDiv>
          {/* row1 */}
          <FlexBox>
            <Button
              background-color="#FACE75"
              padding="1rem 3rem"
              border-radius="10px"
              border="none"
              display="flex"
              alignItems="center"
              fontWeight=" bolder"
              fontSize="20px"
            >
              SALE_50%
            </Button>

            <div>
              <FaCircle color="#DBDBDB" />
              <FaCircle color="#DBDBDB" />
              <FaCircle color="#DBDBDB" />
              <FaCircle color="#DBDBDB" />
              <FaCircle color="#DBDBDB" />
            </div>
          </FlexBox>

          {/* row2 */}
          <FlexBox>
            <div>
              <img src={store[0]?.images[0]} alt="" />
            </div>
          </FlexBox>

          {/* row3 */}
          <FlexBox>
            <LabName>{store[0]?.name}</LabName>
            <LabPrice>${store[0]?.price}</LabPrice>
          </FlexBox>
        </RightDiv>
      </ParentDivLiftAndRight>
    </InnerContainer>
  );
}

export default DevicesDisplaySection;
