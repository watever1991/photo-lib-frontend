import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { useVerifyTokenMutation } from "generated/graphql";
import { logout } from "store/user/userSlice";
import { openSnackbar } from "store/message/snackbarSlice";
import SimpleSnackbar from "components/core/Snackbar";
import { AnonymousApp, UserApp } from "routers";

// const UserApp = lazy(() => import("routers/user-router"));
// const AnonymousApp = lazy(() => import("routers/anonymous-router"));

// const loadStudentRouter = () => import("routers/anonymous-router");
// const loadDoctorRouter = () => import("routers/user-router");

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.user.token);

  const [VerifyToken] = useVerifyTokenMutation();

  const handkeVerifyToken = async (token: string) => {
    try {
      await VerifyToken({ variables: { token } });
    } catch (error) {
      console.log(error);
      dispatch(
        openSnackbar({
          message: "Your session has expired.",
          type: "error",
        })
      );
      dispatch(logout());
      localStorage.clear();
    }
  };

  useEffect(() => {
    // loadStudentRouter();
    // loadDoctorRouter();
    if (token) {
      handkeVerifyToken(token);
    }
  }, []);

  return (
    <>
      {!token && <AnonymousApp />}
      {token && <UserApp />}
      <SimpleSnackbar />
    </>
  );
}

export default App;
