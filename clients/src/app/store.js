import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
