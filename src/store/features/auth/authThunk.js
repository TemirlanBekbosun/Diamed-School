import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../configs/axiosInstanse";

// BASE_URL можно оставить в axiosInstance или в .env
export const AUTH_THUNK = {
  signIn: createAsyncThunk(
    "auth/signIn",
    async ({ email, password }, thunkAPI) => {
      try {
        const res = await axiosInstance.post("/api/auth/login", { email, password });
        return res.data;
      } catch (error) {
        const payload = error?.response?.data || { message: error.message };
        return thunkAPI.rejectWithValue(payload);
      }
    }
  ),

  authWithGoogle: createAsyncThunk("auth/authWithGoogle", async (_, thunkAPI) => {
    return thunkAPI.rejectWithValue({ message: "authWithGoogle not implemented" });
  }),

  forgotPassword: createAsyncThunk(
    "auth/forgotPassword",
    async ({ email }, thunkAPI) => {
      try {
        const res = await axiosInstance.post("/api/auth/forgot", { email });
        return res.data;
      } catch (error) {
        const payload = error?.response?.data || { message: error.message };
        return thunkAPI.rejectWithValue(payload);
      }
    }
  ),

  resetPassword: createAsyncThunk(
    "auth/resetPassword",
    async ({ token, password }, thunkAPI) => {
      try {
        const res = await axiosInstance.post("/api/auth/reset", { token, password });
        return res.data;
      } catch (error) {
        const payload = error?.response?.data || { message: error.message };
        return thunkAPI.rejectWithValue(payload);
      }
    }
  ),
};


