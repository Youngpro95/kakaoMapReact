import { combineReducers, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// const initialStateVal = { "jaeBalDolAgara" }

export const searchSlice = createSlice({
  name: "search",
  initialState: { value: "jaeBalDolAgara" , history : [] },
  reducers: {
    searchHistory: ( state, action ) => {
      const data = action.payload
      if ( state.history.length >= 5){
        state.history.pop();
      }
      state.history.unshift(data);
    },
  },
});

const persistConfig = {
  key : 'root',
  storage
}

export const rootReducer = combineReducers({
  search : searchSlice.reducer
})

export const {searchHistory,test11} = searchSlice.actions;

export default persistReducer(persistConfig, searchSlice.reducer)