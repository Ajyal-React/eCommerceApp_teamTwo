import { ImageDiv, ImgStyle, SideLeft, FlexGap, ImageDivCustom } from "./BrowseProduct.Style";
import image from "../../images/maxim-hopman-Hin-rzhOdWs-unsplash-removebg-preview.png";

function DivImages() {
  return (
    <SideLeft>
      <ImageDiv>
        <ImgStyle src={image} height="80%" width="80%" />
      </ImageDiv>
      <FlexGap>
        <ImageDivCustom BackGColor="#fafafa" Border="#FA7400">
          <ImgStyle src={image} />
        </ImageDivCustom>
        <ImageDivCustom>
          <ImgStyle src={image} />
        </ImageDivCustom>
        <ImageDivCustom>
          <ImgStyle src={image} />
        </ImageDivCustom>
        <ImageDivCustom>
          <ImgStyle src={image} />
        </ImageDivCustom>
        <ImageDivCustom>
          <ImgStyle src={image} width="118px" height="100%" />
        </ImageDivCustom>
      </FlexGap>
    </SideLeft>
  );
}

export default DivImages;
