import MainNavbar from "../../Components/Navbar/MainNavbar";
import {
  InnerContainer,
  // FullContainer,
  Paragraphe,
  Title,
  Button,
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
  // SelectField,
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
            <Title margin="0">MacBook Pro 13</Title>
            <Paragraphe margin="0" color="#9B9A9A">
              The best for your professional life
            </Paragraphe>
            <Paragraphe margin="0" color="#707070">
              Availability in stock: <SpanStyle>Available</SpanStyle>
            </Paragraphe>
            <hr />
            <Paragraphe margin="0" color="#646363">
              Choose your combination
            </Paragraphe>

            <FlexBoxStyle>
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
              <Button
                backgroundColor="#FA7400"
                buttonWidth="100%"
                buttonHeight="40px"
                borderR="5px"
              >
                Add To Card
              </Button>
            </form>
          </SideRight>
        </FlexBoxStyle>
      </InnerContainer>
      <FooterPage/>
    </MainContainer>
    
  );
}
export default BrowseProduct;
