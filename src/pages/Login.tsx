import React from "react";
import { validationLogin } from "validation";
import { useLoginUserMutation } from "generated/graphql";
import {
  Box,
  TextField,
  LinearProgress,
  Button,
  Container,
  Grid,
} from "@mui/material";
import images from "assets/images";
import { useFormik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSnackbar } from "store/features/message/snackbarSlice";
import { setUser } from "store/features/user/userSlice";

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
    backgroundColor: "White",
    color: "#2148C0",
    width: "100%",
    height: "45px",
    "&:hover": {
      background: "hotpink",
      color: "white",
    },
  },
  loginButton: {
    color: "white",
    "&:hover": {
      color: "hotpink",
    },
  },
};

const initialFormState = {
  username: "",
  password: "",
};

interface Values {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const [LoginUser, { loading: loginLoading }] = useLoginUserMutation();
  const submitHandler = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    try {
      const response = await LoginUser({
        variables: { username: values.username, password: values.password },
      });
      if (response.data?.tokenAuth?.token) {
        resetForm({});
        localStorage.setItem("token", response.data?.tokenAuth?.token);
        dispatch(setUser(response.data.tokenAuth));
        dispatch(
          openSnackbar({
            message: "Welcome",
            type: "success",
          })
        );
      }
    } catch (err) {
      console.log(err);
      dispatch(
        openSnackbar({
          message: "Failed to login.",
          type: "error",
        })
      );
    }
  };

  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: validationLogin,
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
                value={formik.values.username}
                name="username"
                label="Username"
                type="text"
                onChange={formik.handleChange}
                sx={{ width: "100%" }}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={formik.values.password}
                name="password"
                label="Password"
                type="text"
                onChange={formik.handleChange}
                sx={{ width: "100%" }}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link to="/forget-password">
                <Button variant="text" type="button" sx={styles.loginButton}>
                  Forgot password?
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/register">
                <Button variant="text" type="button" sx={styles.loginButton}>
                  New member? Register here.
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
