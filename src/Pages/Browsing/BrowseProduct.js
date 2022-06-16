import MainNavbar from "../../Components/Navbar/MainNavbar";
import { InnerContainer, MainContainer, Paragraphe,Title,Button } from "../../Global.style";
import { FlexBoxStyle,SideRight,SpanStyle,ColorOne,ColorTwo,ColorCompination,DivContent,SelectField} from "./BrowseProduct.Style";
import DivImages from "./DivImages";

function BrowseProduct(){
    return(
        <MainContainer>
            <MainNavbar/>
            <InnerContainer>
                <FlexBoxStyle PaddingTop='115px'>
                    <DivImages/>
                    <SideRight>
                        <Title>MacBook Pro 13</Title>
                        <Paragraphe color='#9B9A9A'>The best for your professional life</Paragraphe>
                        <Paragraphe color='#707070'>Availability in stock: <SpanStyle>Available</SpanStyle></Paragraphe>
                        <hr/>
                        <Paragraphe color='#646363'>Choose your combination</Paragraphe>

                        <FlexBoxStyle>
                            <DivContent>
                                <ColorCompination>
                                    <ColorOne BackGColor='#646363'><p></p></ColorOne>
                                    <ColorTwo></ColorTwo>
                                </ColorCompination>
                                <input type='radio' name="compination" value='val1' checked='checked'/>
                            </DivContent>
                            <DivContent>
                                <ColorCompination>
                                    <ColorOne BackGColor='#FFFFFF'><p></p></ColorOne>
                                    <ColorTwo BackGColor='#000000'></ColorTwo>
                                </ColorCompination>
                                <input type='radio' name="compination" value='val2'/>
                            </DivContent>
                            <DivContent>
                                <ColorCompination>
                                    <ColorOne BackGColor='#AFAFAF'><p></p></ColorOne>
                                    <ColorTwo BackGColor='#000000'></ColorTwo>
                                </ColorCompination>
                                <input type='radio' name="compination" value='val3'/>
                            </DivContent>
                            <DivContent>
                                <ColorCompination>
                                    <ColorOne BackGColor='#CACACA'><p></p></ColorOne>
                                    <ColorTwo></ColorTwo>
                                </ColorCompination>
                                <input type='radio' name="compination" value='val4'/>
                            </DivContent>
                        </FlexBoxStyle>
                        <form>
                            <Paragraphe color="#646363">Size and Weight</Paragraphe>
                            
                            <SelectField>
                                <option></option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option> option 4 </option>
                                <option> option 5 </option>
                                </SelectField>
                            <Paragraphe color="#646363">Chip</Paragraphe>
                            <SelectField>
                                <option></option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option> option 4 </option>
                                <option> option 5 </option>
                                </SelectField>
                            <Paragraphe color="#646363">Storage</Paragraphe>
                            <SelectField>
                                <option></option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option> option 4 </option>
                                <option> option 5 </option>
                                </SelectField>
                            <Paragraphe color="#646363">Memory</Paragraphe>
                            <SelectField>
                                <option></option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option> option 4 </option>
                                <option> option 5 </option>
                                </SelectField>
                            <Button backgroundColor='#FA7400' buttonWidth='100%' buttonHeight='40px' borderR='5px'>Add To Card</Button>                     
                            </form>
                    </SideRight>
                </FlexBoxStyle>
            </InnerContainer>
        </MainContainer>
    )
}
export default BrowseProduct;