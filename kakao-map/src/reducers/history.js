import { combineReducers, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// const initialStateVal = { "jaeBalDolAgara" }

export const searchSlice = createSlice({
  name: "search",
  initialState: { value: "jaeBalDolAga~" , history : [] },
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
  storage //store 사용
}

export const rootReducer = combineReducers({
  search : searchSlice.reducer // Slice 안에 있는 reducer 추가
})

export const {searchHistory} = searchSlice.actions;

export default persistReducer(persistConfig, searchSlice.reducer)  /// 퍼시스트 리듀서 합치기?