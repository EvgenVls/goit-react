import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const feachTasks = createAsyncThunk(
  "faatchAllTasks",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get("/tasks");
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "addTask",
  async (newTask, thunkAPI) => {
    try {
      const responce = await axios.post("/tasks", newTask);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const responce = await axios.delete(`/tasks/${taskId}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
