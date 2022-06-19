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
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const handeChangeEmail = (e) => {
    if (e.target.value === "") {
      setError(true);
      setEmail(e.target.value);
    } else {
      setEmail(e.target.value);
      setError(false);
    }
  };
  const handeChangePassword = (e) => {
    if (e.target.value === "") {
      setError(true);
      setPassword(e.target.value);
    } else {
      setPassword(e.target.value);
      setError(false);
    }
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    if (email !== "" || password !== "") {
      // clear input after submit
      setEmail("");
      setPassword("");
    } else {
      setError(true);
    }
  };

  return (
    <MainSign>
      <LeftBox>
        <CustomLink to="/">
          <Image src={Logo} height="70px" width="360px" margin="4rem 0" />
        </CustomLink>
        <MainHeader margin="0 0 2rem">Welcome Back!</MainHeader>
        <Paragraphe fontSize="25px" color="#DEAB80">
          Login to your account and start your shopping <Italic>NOW!</Italic>
        </Paragraphe>
        <Image src={Labtop} width="500px" />
      </LeftBox>
      <RightBox>
        <InnerRigth onSubmit={handeSubmit}>
          <SignText>login</SignText>
          <ContainerInput>
            <Span>
              <EmailIcon />
              Email
            </Span>
            <Input
              type="email"
              placeholder="John@example.com"
              onChange={handeChangeEmail}
              value={email}
            />
          </ContainerInput>
          <ContainerInput>
            <LocklIcon />
            <FlexBox>
              <Input
                type="password"
                placeholder="Password"
                onChange={handeChangePassword}
                value={password}
              />
              <Forget>Forget?</Forget>
            </FlexBox>
          </ContainerInput>
          <EndText>
            <Paragraphe>LOGIN </Paragraphe>
            <ContainerIcon>
              <FaLongArrow />
            </ContainerIcon>
          </EndText>
          {error ? <p>Please Enter your email or password</p> : null}
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
