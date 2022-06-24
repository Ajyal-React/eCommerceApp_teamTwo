import * as yup from "yup";

export const SignUpSchema = () =>
  yup.object({
    email: yup
      .string()
      .required("Please Enter a email !")
      .email("please enter a valid email !"),
    password: yup.string().min(8).required("Please Enter a Password .."),
    passwordConfirm: yup
      .string()
      .min(8)
      .required("Please Enter a Password ..")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  export const SignInSchema = () =>
  yup.object({
    email: yup
      .string()
      .required("Please Enter a email !")
      .email("please enter a valid email !"),
    password: yup.string().min(8).required("Please Enter a Password .."),
  });
