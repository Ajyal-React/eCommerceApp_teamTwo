import styled from "styled-components";
import backImg from "../../images/Group14858.png";
import {FlexBox, MainHeader} from '../../Global.style'

export const BackgroundImage = styled.div`
    height: 200px;
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
export const UpdateFlexBox = styled(FlexBox)`
    justify-content: space-around;
    padding-top: 95px;
    margin-left: 50px;
    width: 80%;
    margin: auto;
    align-items: center;
`

export const DivOpacity = styled.div`
    width: 100%;
    height: 100%;            
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: #000;    
`
export const MainHeaderUpdate = styled(MainHeader)`
text-transform: capitalize;
`