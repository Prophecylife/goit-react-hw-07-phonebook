import { contactsReducer } from './conactSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: contactsReducer,
});
