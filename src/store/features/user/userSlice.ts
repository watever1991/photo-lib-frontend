import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token" || ""),
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.token = actions.payload.token;
      state.username = actions.payload.payload.username;
    },
    logout: (state) => {
      state.token = "";
      state.username = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
