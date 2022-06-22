import MainNavbar from "../../Components/Navbar/MainNavbar";
import {
  InnerContainer,
  // FullContainer,
  Paragraphe,
  Title,
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
  CustomButton
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
            <Title marginBottom="0" textTransform='capitalize'>MacBook Pro 13</Title>
            <Paragraphe margin="0" color="#9B9A9A" fontSize='12px'>
              The best for your professional life
            </Paragraphe>
            <Paragraphe margin="0" color="#707070">
              Availability in stock: <SpanStyle>Available</SpanStyle>
            </Paragraphe>
            <HrS />
            <Paragraphe color="#646363">
              Choose your combination
            </Paragraphe>

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
              <Paragraphe margin="0" color="#646363">
                Size and Weight
              </Paragraphe>
              <OptionFileds />
              <Paragraphe margin="0" color="#646363">
                Chip
              </Paragraphe>
              <OptionFileds />
              <Paragraphe margin="0" color="#646363">
                Storage
              </Paragraphe>
              <OptionFileds />
              <Paragraphe margin="0" color="#646363">
                Memory
              </Paragraphe>
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
