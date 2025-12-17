import { createSlice } from '@reduxjs/toolkit';
import { fetchLessons } from '../Organic/OragnicThunk';

const organicSlice = createSlice({
  name: 'organic',
  initialState: {
    lessons: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.loading = false;
        state.lessons = action.payload;
      })
      .addCase(fetchLessons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default organicSlice.reducer;