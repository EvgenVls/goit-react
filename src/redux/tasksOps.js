import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const feachTasks = createAsyncThunk("faatchAllTasks", async () => {
  const responce = await axios.get("/tasks");
  return responce.data;
});
