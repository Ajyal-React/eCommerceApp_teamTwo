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
  RightBox,
} from "../Auth.Style";
import Logo from "../../../images/Mask Group 2.png";
import Labtop from "../../../images/Base1.png";
import { Formik } from "formik";
import { SignUpSchema } from "../Schema";
import { SignUpAction } from "../../../redux/user/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <MainSign>
      <LeftBox>
        <CustomLink to="/">
          <ImageLogo src={Logo} />
        </CustomLink>
        <MainHeader margin="0 0 2rem">Get Started</MainHeader>
        <AuthP fontSize="25px" color="#DEAB80">
          Create a new account and start shopping NOW!
        </AuthP>
        <Image src={Labtop} width="100%" height="50%" />
      </LeftBox>
      <RightBox>
        <Formik
          initialValues={{ email: "", password: "", passwordConfirm: "" }}
          validationSchema={SignUpSchema()}
          onSubmit={(values) => {
            dispatch(SignUpAction(values, navigate("/")))
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            /* and other goodies */
          }) => (
            <InnerRigth onSubmit={handleSubmit}>
              <SignText>sign up</SignText>
              <ContainerInput>
                <Span>
                  <EmailIcon />
                  Email
                </Span>
                <Input
                  type="email"
                  name="email"
                  placeholder="John@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </ContainerInput>
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
              <ContainerInput>
                <LocklIcon />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </ContainerInput>
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}
              <ContainerInput>
                <LocklIcon />
                <Input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                />
              </ContainerInput>
              {errors.passwordConfirm && touched.passwordConfirm ? (
                <div style={{ color: "red" }}>{errors.passwordConfirm}</div>
              ) : null}
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
          )}
        </Formik>
      </RightBox>
    </MainSign>
  );
}
