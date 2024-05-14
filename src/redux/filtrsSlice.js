import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./costants";

const filtersSlice = createSlice({
  name: "filtres",
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
