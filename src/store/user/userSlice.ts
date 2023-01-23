import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token" || ""),
  username: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.token = actions.payload.token;
      state.username = actions.payload.payload.username;
      state.id = actions.payload.payload.id;
    },
    logout: (state) => {
      state.token = "";
      state.username = "";
      state.id = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
