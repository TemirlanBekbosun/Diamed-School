import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../configs/axiosInstanse";

export const fetchLessons = createAsyncThunk(
  "courses/fetchLessons",
  async (sectionId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/api/sections/${sectionId}/lessons`
      );
      return response.data; 
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Серверден маалымат алуу мүмкүн болгон жок";
      return rejectWithValue(errorMessage);
    }
  }
);
