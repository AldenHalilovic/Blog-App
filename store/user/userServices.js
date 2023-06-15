import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { login as loginService } from "../../services/authServices";
import { persistor } from "..";

export const login = createAsyncThunk(
    "user/login",
    async ({ email, password }, thunkAPI) => {
      try {
        const data = await loginService({ email, password });
        return { user: data };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

// export const logout = createAction("user/logout", () => {
//   persistor.purge();
//   return { message: "user logged out successfully" };
// });

export const logout = createAction("user/logout")

// export const verifyToken = createAction('user/verifyToken', async data =>{
//     return await authService.verifyToken(data)
// })
