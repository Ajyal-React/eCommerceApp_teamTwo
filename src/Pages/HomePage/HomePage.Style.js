import styled from "styled-components";
import backImg from "../../images/Group14858.png";
import {FlexBox} from '../../Global.style'

export const BackgroundImage = styled.div`
    height: 1088px;
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-size: contain;
`
export const UpdateFlexBox = styled(FlexBox)`
    justify-content: space-around;
    padding-top: 95px;
`