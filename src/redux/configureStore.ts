import { userSlice } from "./reducers/User/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/Auth/reducer";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;