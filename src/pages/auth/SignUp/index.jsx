import {
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { validationSchema } from "./validationSchema";
import PasswordComponent from "../../../components/form/PasswordComponent";
import TextComponent from "../../../components/form/TextComponent";
import { signUpThunk } from "./../../../store/thunks/authThunks";
import useAppSnackbar from "../../../hooks/useAppSnackbar";
import { apiStates } from "../../../config/appConfig";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const {showSuccessSnackbar, showErrorSnackbar} = useAppSnackbar();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        /* eslint-disable no-unused-vars */
        const { password_confirmation, ...formData } = values;
        const response = await dispatch(signUpThunk(formData)).unwrap();
        if (response.status === apiStates.success) {
          showSuccessSnackbar(response.message);
        }
      } catch (error) {
        showErrorSnackbar(error)
      }
    },
  });

  return (
    <>
      <Typography variant="h3">Sign Up for Your Account</Typography>
      <Typography variant="body1">
        Sign up to organize, prioritize, and track tasks effortlessly with our
        intuitive platform.
      </Typography>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ mt: 1, width: "100%" }}
      >
        <TextComponent
          formik={formik}
          label="First Name"
          field="first_name"
          type="text"
        />
        <TextComponent
          formik={formik}
          label="Last Name"
          field="last_name"
          type="text"
        />
        <TextComponent
          formik={formik}
          label="Email"
          field="email"
          type="email"
        />
        <PasswordComponent formik={formik} label="Password" field="password" />
        <PasswordComponent
          formik={formik}
          label="Confirm Password"
          field="password_confirmation"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default SignUpPage;
