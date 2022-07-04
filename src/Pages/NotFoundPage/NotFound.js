import { CustomLink, MainContainer } from "../../Global.style";
import { MainBox, Err,Err1, Err2,Msg } from "./NotFound.style";

function NotFound(){
    return(
        <MainContainer>
            <MainBox >
                <Err>4</Err>
                <Err1>0</Err1>
                <Err2>4</Err2>
                <Msg>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <CustomLink to='/'>Home</CustomLink> and try from there.</p></Msg>
            </MainBox>
        </MainContainer>
    );
}
export default NotFound;