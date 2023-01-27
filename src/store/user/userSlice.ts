import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || "",
  user: {
    username: "",
    id: localStorage.getItem("userId") || "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.token = actions.payload.token;
      state.user.username = actions.payload.user.username;
      state.user.id = actions.payload.user.id;
    },
    logout: (state) => {
      state.token = "";
      state.user.username = "";
      state.user.id = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
