import * as Yup from "yup";

export const validationRegister = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

export const validationLogin = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const validationForgetPassword = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
});
