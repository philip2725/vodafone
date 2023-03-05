import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

//configures the store for state management redux
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
