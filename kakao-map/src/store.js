import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './reducers/history'


export default configureStore({
  reducer: {
    search : searchReducer,
  },
})