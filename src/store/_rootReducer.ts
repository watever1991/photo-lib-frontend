import userReducer from "./features/user/userSlice";
import themeReducer from "./features/theme/themeSlice";
import snackbarSlice from "./features/message/snackbarSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  user: userReducer,
  theme: themeReducer,
  snackbar: snackbarSlice,
});

export default reducers;
