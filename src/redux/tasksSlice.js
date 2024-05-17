import { createSlice } from "@reduxjs/toolkit";
import { feachTasks, addTask, deleteTask } from "./tasksOps";

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
        state.error = false;
        state.loading = true;
      })
      .addCase(feachTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(feachTasks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addTask.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
