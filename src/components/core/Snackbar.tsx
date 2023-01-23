import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { closeSnackbar } from "store/message/snackbarSlice";
//loading MUI
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

const SimpleSnackbar = () => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector(
    (state: RootState) => state.snackbar
  );

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert severity={type} sx={{ width: "100%" }} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SimpleSnackbar;
