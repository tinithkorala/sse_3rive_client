import * as Yup from "yup";

export const validationSchema = Yup.object({
  first_name: Yup.string("Invalid first name").required(
    "First name is required"
  ),
  last_name: Yup.string("Invalid last name").required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
