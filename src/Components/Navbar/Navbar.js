import styled from "styled-components";
import { MainContainer ,InnerContainer,Button, FlexBox} from "../../Global.style";
import { BiSearch } from 'react-icons/fa';
import { Paragraphe } from './../../Global.style';
import { centerSection } from './NavbarStyle';


function createMainNav(){
    <MainContainer>
       <InnerContainer>
       <Button background-color='#DCDCDC' border-radius='10px'>English</Button>
       <div><BiSearch/></div>
       <centerSection>
       <FlexBox>
        <List>
        <li><Paragraphe font-size='20px'>Home</Paragraphe></li>
        <li><Paragraphe font-size='20px'>New arrival</Paragraphe></li>
        <li><Paragraphe font-size='20px'>Mobiles</Paragraphe></li>
        <li><img src="../../../public/images/Group 14849.png"/></li>
        <li><Paragraphe font-size='20px'>Laptops</Paragraphe></li>
        <li><Paragraphe font-size='20px'>Headphones</Paragraphe></li>
        <li><Paragraphe font-size='20px'>Accessories</Paragraphe></li>
        </List>
       </FlexBox>
       </centerSection>
        <Button background-color='white' border-radius='20px'><Paragraphe font-size='20px' color='#FFA500' >Sign in</Paragraphe></Button>
       </InnerContainer>
    </MainContainer>

}

export default createMainNav



