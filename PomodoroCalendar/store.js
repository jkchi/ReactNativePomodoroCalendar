import { configureStore } from "@reduxjs/toolkit";

// the reducer is the default export
// the import here using the default export reducer an alias 
import userReducer from "./utils/userSlice";

export default configureStore({
  
  // assign reducer to different state in redux state tree
  // could be omited, since all reducers are thunk reducer
  reducer: {
    user: userReducer,
    // event:eventReducer,
  }
})