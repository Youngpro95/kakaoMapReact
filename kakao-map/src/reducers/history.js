import { createSlice } from "@reduxjs/toolkit";

const initialStateVal = "jaebal"

export const searchSlice = createSlice({
  name: "search",
  initialState: { value: initialStateVal },
  reducers: {
    searchHistory: ( state, action ) => {
      state.value = action.payload
      console.log(state)
      console.log(action)  
    },
  },
});

export const {searchHistory,test11} = searchSlice.actions;

export default searchSlice.reducer;