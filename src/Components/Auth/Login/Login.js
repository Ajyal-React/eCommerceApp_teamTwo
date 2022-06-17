import React from "react";
import {
  Image,
  ContainerInput,
  MainHeader,
  Paragraphe,
  Input,
  Span,
  FlexBox,
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
  Italic,
  Forget,
} from "../Auth.Style";
import Logo from "../../../images/Mask Group 2.png";
import Labtop from "../../../images/Base1.png";

export default function Login() {
  return (
    <MainSign>
      <LeftBox>
        <CustomLink to='/'>
          <Image src={Logo} height="70px" width="360px" margin="4rem 0" />
        </CustomLink>
        <MainHeader margin="0 0 2rem">Welcome Back!</MainHeader>
        <Paragraphe fontSize="25px" color="#DEAB80">
          Login to your account and start your shopping <Italic>NOW!</Italic>
        </Paragraphe>
        <Image src={Labtop} width="500px" />
      </LeftBox>
      <RightBox>
        <InnerRigth>
          <SignText>login</SignText>
          <ContainerInput>
            <Span>
              <EmailIcon />
              Email
            </Span>
            <Input type="email" placeholder="John@example.com" />
          </ContainerInput>
          <ContainerInput>
            <LocklIcon />
            <FlexBox>
              <Input type="password" placeholder="Password" />
              <Forget>Forget?</Forget>
            </FlexBox>
          </ContainerInput>
          <EndText>
            <Paragraphe>LOGIN </Paragraphe>
            <ContainerIcon>
              <FaLongArrow />
            </ContainerIcon>
          </EndText>
          <AlreadySign>
            Don't have account?{" "}
            <CustomLink to="/signin">
              <Bold> Sign Up</Bold>
            </CustomLink>
          </AlreadySign>
        </InnerRigth>
      </RightBox>
    </MainSign>
  );
}
