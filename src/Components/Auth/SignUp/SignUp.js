import React from "react";
import {
  Image,
  ContainerInput,
  MainHeader,
  Paragraphe,
  Input,
  Span,
  CustomLink,
} from "../../../Global.style";
import {
  LeftBox,
  MainSign,
  RightBox,
  SignText,
  InnerRigth,
  EmailIcon,
  LocklIcon,
  AuthBtn,
  FaLongArrow,
  ContainerIcon,
  AlreadySign,
  Bold,
  ImageLogo,
  AuthP,
} from "../Auth.Style";
import Logo from "../../../images/Mask Group 2.png";
import Labtop from "../../../images/Base1.png";

export default function SignUp() {
  
  return (
    <MainSign>
      <LeftBox>
        <CustomLink to='/'>
          <ImageLogo src={Logo}/>
        </CustomLink>
        <MainHeader margin="0 0 2rem">Get Started</MainHeader>
        <AuthP fontSize="25px" color="#DEAB80">
          Create a new account and start shopping NOW!
        </AuthP>
        <Image src={Labtop} width="100%" height="50%" />
      </LeftBox>
      <RightBox>
        <InnerRigth>
          <SignText>sign up</SignText>
          <ContainerInput>
            <Span>
              <EmailIcon />
              Email
            </Span>
            <Input type="email" placeholder="John@example.com" />
          </ContainerInput>
          <ContainerInput>
            <LocklIcon />
            <Input type="password" placeholder="Password" />
          </ContainerInput>
          <ContainerInput>
            <LocklIcon />
            <Input type="password" placeholder="Confirm Password" />
          </ContainerInput>
          <AuthBtn>
            <Paragraphe>SIGN UP </Paragraphe>
            <ContainerIcon>
              <FaLongArrow />
            </ContainerIcon>
          </AuthBtn>
          <AlreadySign>
            Already member?
            <CustomLink to="/login">
              <Bold> Sign in</Bold>
            </CustomLink>
          </AlreadySign>
        </InnerRigth>
      </RightBox>
    </MainSign>
  );
}
