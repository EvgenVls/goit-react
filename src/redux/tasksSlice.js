import { createSlice } from "@reduxjs/toolkit";
import { feachTasks } from "./tasksOps";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(feachTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(feachTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      }),
});

export default slice.reducer;
