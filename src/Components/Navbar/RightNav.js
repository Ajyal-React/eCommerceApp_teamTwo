import { BiSearch } from "react-icons/bi";
import { FlexBoxCenter, FlexBoxRow, FlexCol, HrStyle, Paragraphe,Button,CustomLink} from "../../Global.style";
import userImage from "../../images/userAvatar-0١.png";
import { RightNavContainer, UserImage,  UserSec,  UserText,UserData, RightNavListItems,RightNavList, FirstPart } from './RightNav.Style';
 

function RightNav(){
    return(
      <RightNavContainer>

        <UserSec>
        <FlexBoxCenter>
          <FlexBoxRow alignItems="center" padding="1vh" >
      <UserImage  src={userImage} alt="userImage" />
      <UserData>
        <UserText>
          UserName
        </UserText>
        <UserText>
          My Profile
        </UserText>
      </UserData>
      </FlexBoxRow>
      </FlexBoxCenter>
      </UserSec>
      
      <HrStyle/>

      <RightNavList>
      <FlexCol>
        <FirstPart>
      <FlexBoxRow alignItems="center">
      <Paragraphe fontSize="16px" color="#32353C" >
        <RightNavListItems><CustomLink to="/profile">Home</CustomLink></RightNavListItems></Paragraphe>
       <BiSearch />
      </FlexBoxRow>
      </FirstPart>

      
        
      <Paragraphe fontSize="16px" color="#32353C" >
        <RightNavListItems>New arrival</RightNavListItems></Paragraphe>

        <Paragraphe fontSize="16px" color="#32353C" >
        <RightNavListItems>Mobiles</RightNavListItems></Paragraphe>

        <Paragraphe fontSize="16px" color="#32353C" >
        <RightNavListItems>Laptops</RightNavListItems></Paragraphe>

        <Paragraphe fontSize="16px" color="#32353C" >
        <RightNavListItems>HeadPhones</RightNavListItems></Paragraphe>

        <Paragraphe fontSize="16px" color="#32353C" >
        <RightNavListItems>Mobiles</RightNavListItems></Paragraphe>
        </FlexCol>
        
       </RightNavList>


       <HrStyle/>

       <Button
                backgroundColor="#7B77770F"
                borderR="3px"
                border="none"
                buttonWidth="100px"
                buttonHeight="30px"
                fontSize="14px"
                color="#32353C"
              
              >
                English
              </Button>

      </RightNavContainer>
        
    )
}
export default RightNav