import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null as { id: string; name: string } | null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

// Export the reducer
export const { setUser, clearUser } = appSlice.actions;
export default appSlice;
