import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import portfolioReducer from './portfolioSlice';

export const store = configureStore({
  reducer: {
    loginData: loginReducer,
    portfolioSliceData: portfolioReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state check
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
