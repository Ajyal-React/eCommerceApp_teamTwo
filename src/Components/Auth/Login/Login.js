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
  AuthBtn,
  FaLongArrow,
  ContainerIcon,
  AlreadySign,
  Bold,
  Italic,
  Forget,
  ImageLogo,
  AuthP,
} from "../Auth.Style";
import Logo from "../../../images/Mask Group 2.png";
import Labtop from "../../../images/Base1.png";
import { Formik } from "formik";
import { SignInSchema } from "../Schema";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../../redux/user/userActions";

export default function Login() {
  const dataStore = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("data store", dataStore);
  return (
    <MainSign>
      <LeftBox>
        <CustomLink to="/">
          <ImageLogo src={Logo} />
        </CustomLink>
        <MainHeader margin="0 0 2rem">Welcome Back!</MainHeader>
        <AuthP fontSize="25px" color="#DEAB80">
          Login to your account and start your shopping <Italic>NOW!</Italic>
        </AuthP>
        <Image src={Labtop} width="100%" height="50%" />
      </LeftBox>
      <Formik
        initialValues={{ email: "omaralhafni@gmail.com", password: "omarAlhafni@123456" }}
        validationSchema={SignInSchema()}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(LoginAction(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <RightBox>
            <InnerRigth onSubmit={handleSubmit}>
              <SignText>login</SignText>
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
                <FlexBox>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <Forget>Forget?</Forget>
                </FlexBox>
              </ContainerInput>
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}
              <AuthBtn>
                <Paragraphe>LOGIN </Paragraphe>
                <ContainerIcon>
                  <FaLongArrow />
                </ContainerIcon>
              </AuthBtn>
              <AlreadySign>
                Don't have account?{" "}
                <CustomLink to="/signin">
                  <Bold> Sign Up</Bold>
                </CustomLink>
              </AlreadySign>
            </InnerRigth>
          </RightBox>
        )}
      </Formik>
    </MainSign>
  );
}
