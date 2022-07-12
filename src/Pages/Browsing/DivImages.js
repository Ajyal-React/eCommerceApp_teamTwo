import { ImageDiv, ImgStyle, SideLeft, FlexGap, ImageDivCustom } from "./BrowseProduct.Style";
import {useSelector} from 'react-redux';
import React, {useState} from "react";

function DivImages() {
  const product = useSelector((store)=>store?.ProductReducer?.product);
  const [displayImgOnTop,setDisplayImgOnTop] = useState('');


  const displayImg=(e)=>{
      setDisplayImgOnTop(e.target.src);

      // const parent = e.target.parentNode;
      // parent.style.border='#FA7400';
      // parent.style.background='#fafafa';
  }

  return (
    <SideLeft>
      <ImageDiv>
        <ImgStyle src={displayImgOnTop?displayImgOnTop:`${product?.images?.[0]}`} height="80%" width="80%" alt='Image' />
      </ImageDiv>
      <FlexGap>
        
        {product?.images?.map((imgProduct, index)=>(
          <ImageDivCustom key={index}>
            <ImgStyle src={imgProduct} onClick={(e)=>displayImg(e)} alt='Image'/>
          </ImageDivCustom>
        ))}
      </FlexGap>
    </SideLeft>
  );
}

export default DivImages;
