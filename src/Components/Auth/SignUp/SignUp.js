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
  EndText,
  FaLongArrow,
  ContainerIcon,
  AlreadySign,
  Bold,
} from "../Auth.Style";
import Logo from "../../../images/Mask Group 2.png";
import Labtop from "../../../images/Base1.png";

export default function SignUp() {
  return (
    <MainSign>
      <LeftBox>
        <CustomLink to='/'>
          <Image src={Logo} height="70px" width="360px" margin="4rem 0" />
        </CustomLink>
        <MainHeader margin="0 0 2rem">Get Started</MainHeader>
        <Paragraphe fontSize="25px" color="#DEAB80">
          Create a new account and start shopping NOW!
        </Paragraphe>
        <Image src={Labtop} width="500px" />
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
          <EndText>
            <Paragraphe>SIGN UP </Paragraphe>
            <ContainerIcon>
              <FaLongArrow />
            </ContainerIcon>
          </EndText>
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
