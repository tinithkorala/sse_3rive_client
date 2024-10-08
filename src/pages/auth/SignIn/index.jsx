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
import { signInThunk } from "./../../../store/thunks/authThunks";
import useAppSnackbar from "../../../hooks/useAppSnackbar";
import { apiStates } from "../../../config/appConfig";

const SignInPage = () => {
  const dispatch = useDispatch();
  const {showSuccessSnackbar, showErrorSnackbar} = useAppSnackbar();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(signInThunk(values)).unwrap();
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
      <Typography variant="h4">Sign In To Your Account</Typography>
      <Typography variant="body1">
        Welcome back to access personalized features and manage your tasks.
      </Typography>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ mt: 1, width: "100%" }}
      >
        <TextComponent
          formik={formik}
          label="Email"
          field="email"
          type="email"
        />
        <PasswordComponent formik={formik} label="Password" field="password" />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

export default SignInPage;
