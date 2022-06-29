import {
  ImageDiv,
  ImgStyle,
  SideLeft,
  FlexGap,
  ImageDivCustom,
} from "./BrowseProduct.Style";
// import image from "../../images/maxim-hopman-Hin-rzhOdWs-unsplash-removebg-preview.png";

function DivImages(imagesProduct) {
  return (
    <SideLeft>
      <ImageDiv>
        <ImgStyle src={imagesProduct.allImages} height="80%" width="80%" />
      </ImageDiv>
      <FlexGap>
        <ImageDivCustom>
          <ImgStyle src={imagesProduct.allImages} />
        </ImageDivCustom>
        <ImageDivCustom>
          <ImgStyle src={imagesProduct.allImages} />
        </ImageDivCustom>
        <ImageDivCustom>
          <ImgStyle src={imagesProduct.allImages} />
        </ImageDivCustom>
        <ImageDivCustom>
          <ImgStyle src={imagesProduct.allImages} />
        </ImageDivCustom>
        <ImageDivCustom>
          <ImgStyle src={imagesProduct.allImages} />
        </ImageDivCustom>
      </FlexGap>
    </SideLeft>
  );
}

export default DivImages;
