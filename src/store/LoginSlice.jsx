import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  // initialState: {
  //     user:null
  // },
  initialState: {
    user: "",
  },
  reducers: {
    Login: (state, action) => {
      // state.user=[...state.user, action.payload]
      state.user = action.payload;
      console.log("object", action.payload);
    },
  },
});
export default userSlice.reducer;
export const { Login } = userSlice.actions;
// export const selectUser = (state) => state.user;
