import MainNavbar from "../../Components/Navbar/MainNavbar";
import {
  InnerContainer,
  MainContainer,
} from "../../Global.style";
import FooterPage from "../FooterPage/FooterPage";
import {
  FlexBoxStyle,
  SideRight,
  SpanStyle,
  ColorOne,
  ColorTwo,
  ColorCompination,
  DivContent,
  HrS,
  CustomButton,
  CustomParaghraph,
  CustomTitle
} from "./BrowseProduct.Style";
import DivImages from "./DivImages";
import OptionFileds from "./OptionFields";

function BrowseProduct() {
  return (
    <MainContainer>
      <MainNavbar />
      <InnerContainer>
        <FlexBoxStyle PaddingTop="115px" MarginBottom='75px'>
          <DivImages />
          <SideRight>
            <CustomTitle marginBottom="0" textTransform='capitalize'>MacBook Pro 13</CustomTitle>
            <CustomParaghraph margin="0" color="#9B9A9A" fontSize='12px'>
              The best for your professional life
            </CustomParaghraph>
            <CustomParaghraph margin="0" color="#707070">
              Availability in stock: <SpanStyle>Available</SpanStyle>
            </CustomParaghraph>
            <HrS />
            <CustomParaghraph color="#646363">
              Choose your combination
            </CustomParaghraph>

            <FlexBoxStyle MarginBottom='16px'>
              <DivContent>
                <ColorCompination>
                  <ColorOne BackGColor="#646363">
                    <p></p>
                  </ColorOne>
                  <ColorTwo></ColorTwo>
                </ColorCompination>
                <input
                  type="radio"
                  name="compination"
                  value="val1"
                  checked="checked"
                />
              </DivContent>
              <DivContent>
                <ColorCompination>
                  <ColorOne BackGColor="#FFFFFF">
                    <p></p>
                  </ColorOne>
                  <ColorTwo BackGColor="#000000"></ColorTwo>
                </ColorCompination>
                <input type="radio" name="compination" value="val2" />
              </DivContent>
              <DivContent>
                <ColorCompination>
                  <ColorOne BackGColor="#AFAFAF">
                    <p></p>
                  </ColorOne>
                  <ColorTwo BackGColor="#000000"></ColorTwo>
                </ColorCompination>
                <input type="radio" name="compination" value="val3" />
              </DivContent>
              <DivContent>
                <ColorCompination>
                  <ColorOne BackGColor="#CACACA">
                    <p></p>
                  </ColorOne>
                  <ColorTwo></ColorTwo>
                </ColorCompination>
                <input type="radio" name="compination" value="val4" />
              </DivContent>
            </FlexBoxStyle>
            <form>
              <CustomParaghraph margin="0" color="#646363">
                Size and Weight
              </CustomParaghraph>
              <OptionFileds />
              <CustomParaghraph margin="0" color="#646363">
                Chip
              </CustomParaghraph>
              <OptionFileds />
              <CustomParaghraph margin="0" color="#646363">
                Storage
              </CustomParaghraph>
              <OptionFileds />
              <CustomParaghraph margin="0" color="#646363">
                Memory
              </CustomParaghraph>
              <OptionFileds />
              <CustomButton>
                Add To Card
              </CustomButton>
            </form>
          </SideRight>
        </FlexBoxStyle>
        <HrS margin='0px -101px'/>
      </InnerContainer>
      <FooterPage/>
    </MainContainer>
    
  );
}
export default BrowseProduct;
