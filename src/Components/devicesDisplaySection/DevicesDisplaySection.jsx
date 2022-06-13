import React from 'react';

import DeviceItem from "./components/DeviceItem";
import {InnerContainer, FlexBox, Button} from "../../Global.style";
import { LeftDiv, RightDiv } from './DevicesDisplaySection.style';
import Point from "../../images/point.jpg";
import Mob from "../../images/MaskGroup41.png";

function DevicesDisplaySection(){
    return(
        <InnerContainer>
             {/* FlexBox contain on left and right  */}
            <FlexBox>
                {/* 50% div in left  */}
                <LeftDiv>
                    <DeviceItem/>
                    <DeviceItem/>
                    <DeviceItem/>
                    <DeviceItem/>  
                </LeftDiv>


                {/* 50% div in right  */}
                <RightDiv >

                    {/* row1 */}
                    <FlexBox>
                        <div>
                          <Button background-color="#FACE75" padding= '1rem 3rem'
                             border-radius="10px" border= 'none' display='flex' alignItems='center'
                             fontWeight=' bolder'
                             fontSize= '20px'>
                            SALE_50%
                           </Button>
                        </div>
                        <div><img src={Point} alt="" /></div>
                    </FlexBox>

                    {/* row2 */}
                    <FlexBox>
                        <div>
                            <img src={Mob} alt="" />

                        </div>
                    </FlexBox>

                    {/* row3 */}
                    <FlexBox>
                        <div>HP Laptop</div>
                        <div>99$</div>
                    </FlexBox>
                </RightDiv>
            </FlexBox>
        </InnerContainer>
    );
}

export default DevicesDisplaySection;