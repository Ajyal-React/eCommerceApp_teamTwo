import { CustomLink, Image, MainContainer } from "../../Global.style";
import { MainBox, Msg, ImageNotFound } from "./NotFound.style";
import img from "../../images/error.png";

function NotFound() {
  return (
    <MainContainer>
      <MainBox>
        <ImageNotFound>
          <Image heigth="100%" src={img} alt="404 notfound" />
        </ImageNotFound>
        <Msg>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <CustomLink to="/">Home</CustomLink> and try from there.
          </p>
        </Msg>
      </MainBox>
    </MainContainer>
  );
}
export default NotFound;
