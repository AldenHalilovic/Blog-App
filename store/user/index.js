import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";

const persistConf = {
  key: "user",
  storage,
  blacklist: ["error", "isLoading"],
};

export default persistReducer(persistConf, userReducer);