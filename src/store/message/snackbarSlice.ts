import { createSlice } from "@reduxjs/toolkit";

const initialState: snackbarActionType = {
  open: false,
  message: "",
  type: "success",
};

type snackbarActionType = {
  open: boolean;
  message: string;
  type: "success" | "error";
};

export const snackbarSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openSnackbar: (state, actions) => {
      state.open = true;
      state.message = actions.payload.message;
      state.type = actions.payload.type;
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
