import { ImageDiv, ImgStyle, SideLeft, FlexGap, ImageDivCustom } from "./BrowseProduct.Style";

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
          <ImgStyle src={imagesProduct.allImages} width="118px" height="100%" />
        </ImageDivCustom>
      </FlexGap>
    </SideLeft>
  );
}

export default DivImages;
