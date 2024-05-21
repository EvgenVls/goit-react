import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const responce = await axios.post("/users/signup", newUser);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${responce.data.token}`;
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const responce = await axios.post("/user/login", userInfo);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${responce.data.token}`;
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const responce = await axios.post("/users/logout");
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
