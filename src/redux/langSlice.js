import { createSlice } from "@reduxjs/toolkit";

// export const changeLang = (newLang) => {
//   return {
//     type: "locale/changeLang",
//     payload: newLang,
//   };
// };

// export const langReducer = (state = { lang: "uk" }, action) => {
//   switch (action.type) {
//     case "locale/changeLang":
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;
