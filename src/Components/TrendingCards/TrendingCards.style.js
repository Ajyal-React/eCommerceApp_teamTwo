import styled from 'styled-components';
import { FlexBoxCenter, Paragraphe } from './../../Global.style';


export const TrendingCard = styled('div')`
width: 280px;
height: 280px;
border: 0.3px solid #575252;
margin: 2vh 0;
padding: 0 2vh 2vh 2vh;
border-radius:7px;
`

export const TrendingImg = styled('Img')`
width: 100%;
height: 210px;
margin:auto;
padding:1vh;

`
export const ProductTitle = styled(Paragraphe)`
font-size:12px;
 color:#111111;
 max-width:150px;
 text-align: left;
 margin:auto;

`

export const PriceBG = styled(FlexBoxCenter)`
width: 57px;
height: 30px;
background-color:#FF4F0416;
border-radius: 15px;
margin:2vh;
position:relative;
justify-content:center;
`




