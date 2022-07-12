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
import { useDispatch } from "react-redux";
import { LoginAction } from "../../../redux/user/userActions";
import { useSelector } from "react-redux/es/exports";
import SpinnerComp from "./../../Spinner/index";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const isLoading = useSelector((store) => store?.userReducer?.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema()}
        onSubmit={(values) => {
          dispatch(LoginAction(values, navigate("/")));
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
                {isLoading ? <SpinnerComp /> : null}
                <Paragraphe>LOGIN</Paragraphe>
                <ContainerIcon>
                  <FaLongArrow />
                </ContainerIcon>
              </AuthBtn>
              
              <AlreadySign>
                Don't have account?{" "}
                <CustomLink to="/SignUp">
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
