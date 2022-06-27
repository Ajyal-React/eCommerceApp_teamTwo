import styled from "styled-components";
import { FlexBox } from "../../../../Global.style";


export const ContactDetails= styled.div`
    background: linear-gradient(to right, rgba(255,0,0,0), rgb(184 191 219));
    height: 165px;
    padding-top:35px;
    height: 165px;
    padding-top: 35px;
    position: fixed;
    top: 80px;
    width: 100%;
    z-index: 99999;

`
export const CustomFlex = styled(FlexBox)`
    justify-content: center;
    margin-left: 186px;
`

export const H5 = styled.h5`
   margin:0;
   width: 80px;
`

export const ImgProfile = styled.div`
   position: fixed;
   right: 64%;
   top: 20%;
   background: #ddd;
   padding: 35px;
   border-radius: 50%;
`