import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userPersistReducer from "./userSlice";

const persistConf = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const rootReducer = combineReducers({
  user: userPersistReducer,
});

export default persistReducer(persistConf, rootReducer);
