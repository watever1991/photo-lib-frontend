import userReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice";
import snackbarSlice from "./message/snackbarSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  userSlice: userReducer,
  theme: themeReducer,
  snackbar: snackbarSlice,
});

export default reducers;
