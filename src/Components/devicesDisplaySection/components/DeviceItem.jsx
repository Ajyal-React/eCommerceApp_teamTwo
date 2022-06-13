import React from "react";

import {FlexBox} from "../../../Global.style";
import {Item, FlexEnd} from "./DeviceItem.style";
import FirstImage from "../../../images/FirstMaskGroup.png";
import Heart from "../../../images/heart.jpg";
import Star from "../../../images/star.jpg"
import Store from "../../../images/store.jpg"
function  DeviceItem(){
    return(
        <Item>
            <FlexEnd>
                <img src={Heart} alt="" />
            </FlexEnd>
            <div>
                <img src={FirstImage} alt="" />
            </div>
            <div>
                <FlexBox>
                    <div>Dell Laptop</div>
                    <div>99$</div>
                </FlexBox>
            </div>
            <hr />
            <div>
                <FlexBox>
                    <div><img src={Star} alt="" /></div>
                    <div><img src={Store} alt="" /></div>
                </FlexBox>
            </div>
        </Item>

    );
}

export default DeviceItem;