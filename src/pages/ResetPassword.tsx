import { validationResetPassword } from "helpers/validation";
import { useResetUserPasswordMutation } from "generated/graphql";
import {
  Box,
  TextField,
  LinearProgress,
  Button,
  Container,
  Grid,
} from "@mui/material";
import images from "assets/images";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { openSnackbar } from "store/message/snackbarSlice";
import { RootState } from "store";
import { useTheme } from "@emotion/react";

const initialFormState = {
  currentPassword: "",
  newPassword: "",
};

interface Values {
  currentPassword: string;
  newPassword: string;
}

const ForgetPasswordForm = () => {
  const theme = useTheme();
  const styles = {
    boxContainer: {
      background: "#264ECA",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    formWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    formImage: {
      marginBottom: "71px",
    },
    floatingObject: {
      position: "absolute",
      top: "7vmin",
      right: "2%",
      background: "#3c63d7",
      width: "70vmin",
      height: "70vmin",
      borderRadius: "34% 66% 26% 74% / 22% 30% 70% 78% ",
      animation: "float 6s ease-in-out infinite",
    },
    submitButton: {
      backgroundColor: "white",
      color: "#2148C0",
      width: "100%",
      height: "45px",
      "&:hover": {
        background: "hotpink",
        color: "white",
      },
    },
  };
  const dispatch = useDispatch();
  const [resetPassword, { loading: loginLoading }] =
    useResetUserPasswordMutation();
  const userId = useSelector((state: RootState) => state.userSlice.user.id);

  const submitHandler = async (values: Values) => {
    try {
      await resetPassword({
        variables: { ...values, id: userId },
      });
      dispatch(
        openSnackbar({
          message: "Your pasword changed successfully",
          type: "success",
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(
        openSnackbar({
          message: "Failed to reset password.",
          type: "error",
        })
      );
    }
  };

  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: validationResetPassword,
    onSubmit: submitHandler,
  });

  return (
    <Box sx={styles.boxContainer}>
      <Container maxWidth="xs">
        <form onSubmit={formik?.handleSubmit}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <img src={images.cart.cartIcon} />
            <Grid item xs={12}>
              <TextField
                value={formik.values.currentPassword}
                name="currentPassword"
                label="Current Password"
                type="text"
                onChange={formik.handleChange}
                sx={{ width: "100%" }}
                error={
                  formik.touched.currentPassword &&
                  Boolean(formik.errors.currentPassword)
                }
                helperText={
                  formik.touched.currentPassword &&
                  formik.errors.currentPassword
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={formik.values.newPassword}
                name="newPassword"
                label="New Password"
                type="text"
                onChange={formik.handleChange}
                sx={{ width: "100%" }}
                error={
                  formik.touched.newPassword &&
                  Boolean(formik.errors.newPassword)
                }
                helperText={
                  formik.touched.newPassword && formik.errors.newPassword
                }
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={loginLoading ? { opacity: 1 } : { opacity: 0 }}
            >
              <LinearProgress />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={styles.submitButton}
                disabled={formik?.isSubmitting}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ForgetPasswordForm;
