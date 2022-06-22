import React from "react";
import { ErrorMessage, Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Test() {
  const SignReq = async () => {
    console.log(formik.values);
    // const res = await axios.post(
    //   "https://omar-tech-store.herokuapp.com/api/users/signup",
    //   formik.values
    // );
    // console.log(res);
  };
  const SignupSchema = Yup.object({
    email: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    passwordConfirmation: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    
    validationSchema: SignupSchema,
    onSubmit: () => {
      SignReq();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {/* {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null} */}
      {/* <ErrorMessage name="firstName">
          {(msg) => <div>{msg}</div>}
        </ErrorMessage> */}

      <label htmlFor="passwordConfirmation">confirmPassword</label>
      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Test;
