import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;